package providers

import (
	"bytes"
	"fmt"
	"github.com/domgolonka/threatscraper/pkg/utils/ip"
	"net/http"
	"net/url"
	"time"
)

type TxtDomains struct {
	proxy      string
	proxyList  []string
	lastUpdate time.Time
}

var speedlist = []string{"https://raw.githubusercontent.com/TheSpeedX/SOCKS-List/master/socks5.txt",
	"https://raw.githubusercontent.com/TheSpeedX/SOCKS-List/master/socks4.txt",
	"https://raw.githubusercontent.com/TheSpeedX/SOCKS-List/master/http.txt",
	"https://raw.githubusercontent.com/firehol/blocklist-ipsets/master/proxylists_1d.ipset",
	"https://raw.githubusercontent.com/firehol/blocklist-ipsets/master/proxyrss_1d.ipset",
	"https://raw.githubusercontent.com/firehol/blocklist-ipsets/master/proxyspy_1d.ipset",
	"https://raw.githubusercontent.com/firehol/blocklist-ipsets/master/socks_proxy_7d.ipset",
	"https://raw.githubusercontent.com/firehol/blocklist-ipsets/master/ri_web_proxies_30d.ipset",
	"https://raw.githubusercontent.com/firehol/blocklist-ipsets/master/sslproxies_1d.ipset"}

func NewTxtDomains() *TxtDomains {
	return &TxtDomains{}
}
func (*TxtDomains) Name() string {
	return "github.com/TheSpeedX/PROXY-List"
}

func (x *TxtDomains) SetProxy(proxy string) {
	x.proxy = proxy
}

func (c *TxtDomains) Load(body []byte) ([]string, error) {
	// don't need to update this more than once a day!
	if time.Now().Unix() >= c.lastUpdate.Unix()+(82800) {
		c.proxyList = make([]string, 0, 0)
	}

	if len(c.proxyList) != 0 {
		return c.proxyList, nil
	}
	allbody := make([]string, len(speedlist))
	if body == nil {
		var err error
		for i := 0; i < len(speedlist); i++ {
			if body, err = c.MakeRequest(speedlist[i]); err != nil {
				return nil, err
			}

			ipv4, err := ip.ParseIps(body)
			if err != nil {
				return nil, err
			}
			allbody = append(allbody, ipv4...)
		}
	}

	c.proxyList = allbody

	c.lastUpdate = time.Now()

	return c.proxyList, nil

}
func (c *TxtDomains) MakeRequest(urllist string) ([]byte, error) {
	var body bytes.Buffer

	req, err := http.NewRequest(http.MethodGet, urllist, nil)
	if err != nil {
		return nil, err
	}

	var client = NewClient()
	if c.proxy != "" {
		proxyURL, err := url.Parse("http://" + c.proxy)
		if err != nil {
			return nil, err
		}
		client.Transport.(*http.Transport).Proxy = http.ProxyURL(proxyURL)
	} else {
		client.Transport.(*http.Transport).Proxy = http.ProxyFromEnvironment
	}

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

func (c *TxtDomains) List() ([]string, error) {
	return c.Load(nil)
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