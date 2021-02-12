package providers

import (
	"bytes"
	"fmt"
	"github.com/sirupsen/logrus"
	"net/http"
	"strings"
	"time"
)

var ervsfreevps = []string{"https://raw.githubusercontent.com/ejrv/VPNs/master/vpn-ipv4.txt",
	"https://raw.githubusercontent.com/ejrv/VPNs/master/vpn-ipv6.txt"}

type TxtDomains struct {
	hosts      []string
	logger     logrus.FieldLogger
	lastUpdate time.Time
}

func NewTxtDomains(logger logrus.FieldLogger) *TxtDomains {
	logger.Debug("starting TxtDomains")
	return &TxtDomains{
		logger: logger,
	}
}
func (*TxtDomains) Name() string {
	return "ervs_free_vps"
}

func (c *TxtDomains) Load(body []byte) ([]string, error) {

	// don't need to update this more than once a day!
	if time.Now().Unix() >= c.lastUpdate.Unix()+(82800) {
		c.hosts = make([]string, 0, 0)
	}

	if len(c.hosts) != 0 {
		return c.hosts, nil
	}
	allbody := make([]byte, 0, len(ervsfreevps))
	if body == nil {
		var err error
		for i := 0; i < len(ervsfreevps); i++ {
			c.logger.Debug(ervsfreevps[i])
			if body, err = c.MakeRequest(ervsfreevps[i]); err != nil {
				allbody = append(allbody, body...)
			}

		}
	}

	c.hosts = strings.Split(string(allbody), "\n")

	c.lastUpdate = time.Now()

	return c.hosts, nil

}
func (c *TxtDomains) MakeRequest(urllist string) ([]byte, error) {
	var body bytes.Buffer

	req, err := http.NewRequest(http.MethodGet, urllist, nil)
	if err != nil {
		return nil, err
	}

	var client = NewClient()

	resp, err := client.Do(req)
	if resp != nil {
		defer resp.Body.Close()
	}

	if err != nil {
		return nil, err
	}

	_, err = body.ReadFrom(resp.Body)
	if err != nil {
		return nil, err
	}

	cut, ok := skip(body.Bytes(), 2)
	if !ok {
		return nil, fmt.Errorf("less than %d lines", 2)
	}

	return cut, err
}

func skip(b []byte, n int) ([]byte, bool) {
	for ; n > 0; n-- {
		if len(b) == 0 {
			return nil, false
		}
		x := bytes.IndexByte(b, '\n')
		if x < 0 {
			x = len(b)
		} else {
			x++
		}
		b = b[x:]
	}
	return b, true
}

func (c *TxtDomains) List() ([]string, error) {
	return c.Load(nil)
}