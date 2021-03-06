package app

import (
	"os"
	"time"

	"github.com/joho/godotenv"

	"github.com/domgolonka/foretoken/pkg/utils/ip"

	"github.com/domgolonka/foretoken/app/data"
	"github.com/domgolonka/foretoken/config"
	"github.com/domgolonka/foretoken/lib/scrapers/email/disposable"
	"github.com/domgolonka/foretoken/lib/scrapers/email/free"
	spamemail "github.com/domgolonka/foretoken/lib/scrapers/email/spam"
	"github.com/domgolonka/foretoken/lib/scrapers/ip/proxy"
	"github.com/domgolonka/foretoken/lib/scrapers/ip/spam"
	"github.com/domgolonka/foretoken/lib/scrapers/ip/tor"
	"github.com/domgolonka/foretoken/lib/scrapers/ip/vpn"
	"github.com/domgolonka/foretoken/ops"
	"github.com/pkg/errors"
	"github.com/sirupsen/logrus"
)

type App struct {
	ProxyList           []string
	SpamList            []string
	VPNList             []string
	DCList              []string
	EmailDisposalList   []string
	EmailFreeList       []string
	Logger              logrus.FieldLogger
	Reporter            ops.ErrorReporter
	Config              *config.Config
	ProxyStore          data.ProxyStore
	VpnStore            data.VpnStore
	DisableStore        data.DisposableStore
	SpamStore           data.SpamStore
	SpamEmailStore      data.SpamEmailStore
	TorStore            data.TorStore
	FreeEmailStore      data.FreeEmailStore
	ProxyGenerator      *proxy.ProxyGenerator
	VPNGenerator        *vpn.VPN
	DisposableGenerator *disposable.Disposable
	SpamGenerator       *spam.Spam
	SpamEmailGenerator  *spamemail.SpamEmail
	TorGenerator        *tor.Tor
	FreeEmailGenerator  *free.Free
	Maxmind             *ip.Maxmind
	PwnedKey            string
}

func NewApp(cfg *config.Config, logger logrus.FieldLogger) (*App, error) {

	err := godotenv.Load()
	if err != nil {
		logger.Error("Error loading .env file")

	}
	maxmindkey := os.Getenv("MAXMIND")

	pwnedKey := os.Getenv("PWNEDKEY")
	reporter := ops.Log
	if cfg.ErrorReporter.Default == "airbreak" {
		reporter = ops.Airbrake
	} else if cfg.ErrorReporter.Default == "sentry" {
		reporter = ops.Sentry
	}
	errorReporter, err := ops.NewErrorReporter(cfg.ErrorReporter.AirbrakeCredentials, reporter, logger)
	if err != nil {
		return nil, errors.Wrap(err, "ReporterError")
	}

	db, err := data.NewDB(cfg)

	if err != nil {
		return nil, errors.Wrap(err, "data.NewDB")
	}
	err = db.Ping()
	if err != nil {
		return nil, errors.Wrap(err, "error cannot ping to database")
	}
	proxyStore, err := data.NewProxyStore(db)
	if err != nil {
		return nil, errors.Wrap(err, "NewProxyStore")
	}
	vpnStore, err := data.NewVpnStore(db)
	if err != nil {
		return nil, errors.Wrap(err, "NewVPNStore")
	}
	disposableStore, err := data.NewDisposableStore(db)
	if err != nil {
		return nil, errors.Wrap(err, "NewDisposableStore")
	}
	freeEmailStore, err := data.NewFreeEmailStore(db)
	if err != nil {
		return nil, errors.Wrap(err, "NewFreeEmailStore")
	}
	spamStore, err := data.NewSpamStore(db)
	if err != nil {
		return nil, errors.Wrap(err, "NewSpamStore")
	}
	spamEmailStore, err := data.NewSpamEmailStore(db)
	if err != nil {
		return nil, errors.Wrap(err, "NewSpamEmailStore")
	}
	torStore, err := data.NewTorStore(db)
	if err != nil {
		return nil, errors.Wrap(err, "NewSpamStore")
	}

	var maxmind *ip.Maxmind
	if maxmindkey != "" {
		maxmind = ip.NewMaxmind(cfg, maxmindkey, logger)
		err = maxmind.DownloadAndUpdate()
		if err != nil {
			logger.Fatalln(err)
		}
	}

	proxygen := proxy.New(proxyStore, cfg.Proxy.Workers, time.Duration(cfg.Proxy.CacheDurationMinutes), cfg.Crontab.Proxy, logger, cfg.Resource.IPProxyList)
	vpngen := vpn.NewVPN(vpnStore, cfg.Crontab.VPN, logger, cfg.Resource.IPVPNList, cfg.Resource.IPOpenVPNList)
	torgen := tor.NewTor(torStore, cfg.Crontab.Tor, logger, cfg.Resource.IPTorList)
	spamgen := spam.NewSpam(spamStore, cfg.Crontab.Spam, logger, cfg.Resource.IPSpamList)
	freeEmailGen := free.NewFreeEmail(freeEmailStore, logger, cfg.Resource.EmailFreeList)
	disgen := disposable.NewDisposable(disposableStore, logger, cfg.Resource.EmailDisposalList)
	spamemailgen := spamemail.NewSpamEmail(spamEmailStore, logger, cfg.Resource.EmailSpamList)

	app := &App{
		// Provide access to root DB - useful when extending AccountStore functionality
		Config:   cfg,
		Reporter: errorReporter,
		Logger:   logger,
		// store
		ProxyStore:     proxyStore,
		VpnStore:       vpnStore,
		DisableStore:   disposableStore,
		FreeEmailStore: freeEmailStore,
		SpamStore:      spamStore,
		SpamEmailStore: spamEmailStore,
		TorStore:       torStore,
		// generator
		ProxyGenerator:      proxygen,
		VPNGenerator:        vpngen,
		TorGenerator:        torgen,
		SpamGenerator:       spamgen,
		DisposableGenerator: disgen,
		SpamEmailGenerator:  spamemailgen,
		FreeEmailGenerator:  freeEmailGen,
		Maxmind:             maxmind,
		PwnedKey:            pwnedKey,
	}
	err = jobs(logger, app)
	return app, err
}
