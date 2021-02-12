package main

import (
	"fmt"
	"os"
	"path"

	"github.com/domgolonka/threatscraper/app"
	"github.com/domgolonka/threatscraper/app/data"
	"github.com/domgolonka/threatscraper/config"
	"github.com/domgolonka/threatscraper/server"
	"github.com/jinzhu/configor"
	"github.com/sirupsen/logrus"
)

// VERSION is a value injected at build time with ldflags
var VERSION string

func main() {
	var cmd string
	var appPath, _ = os.Getwd()
	configFilePath := appPath + "/config/config.dev.yml"
	var cfg config.Config
	err := configor.Load(&cfg, configFilePath)
	if err != nil {
		logrus.Info("\nsee: https://github.com/domgolonka/threatscraper/blob/master/docs/config.md")
		logrus.Fatal(err)
	}

	if len(os.Args) == 1 {
		cmd = "server"
	} else {
		cmd = os.Args[1]
	}

	if cmd == "server" {
		serve(cfg)
	} else if cmd == "migrate" {
		migrate(cfg)
	} else {
		os.Stderr.WriteString("unexpected invocation\n")
		usage()
		os.Exit(2)
	}
}

func serve(cfg config.Config) {

	// Default logger
	logger := logrus.New()
	logger.Formatter = &logrus.JSONFormatter{}
	if cfg.Debug {
		logger.Level = logrus.DebugLevel
	}
	logger.Out = os.Stdout

	logger.Infof(fmt.Sprintf("~*~ ThreatScraper v%s ~*~", VERSION))

	newApp, err := app.NewApp(cfg, logger)
	if err != nil {
		logger.Fatal(err)
		return
	}

	server.Server(newApp)
}

func migrate(cfg config.Config) {
	logrus.Info("Running migrations.")
	err := data.MigrateDB(cfg)
	if err != nil {
		logrus.Error(err)
	} else {
		logrus.Info("Migrations complete.")
	}
}

func usage() {
	exe := path.Base(os.Args[0])
	logrus.Info(fmt.Sprintf(`
Usage:
%s server  - run the server (default)
%s migrate - run migrations
`, exe, exe))
}
