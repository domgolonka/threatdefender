package entity

type IPAddressResponse struct {
	Success         bool    `json:"success"`
	Proxy           bool    `json:"proxy"`
	ISP             string  `json:"ISP"`
	Organization    string  `json:"organization"`
	ASN             uint    `json:"ASN"`
	Hostname        string  `json:"hostname"`
	CountryCode     string  `json:"country_code"`
	City            string  `json:"city"`
	PostalCode      string  `json:"postal_code"`
	IsCrawler       bool    `json:"is_crawler,omitempty"`
	ConnectionType  string  `json:"connection_type,omitempty"`
	Latitude        float64 `json:"latitude"`
	Longitude       float64 `json:"longitude"`
	Timezone        string  `json:"timezone"`
	Vpn             bool    `json:"vpn"`
	Tor             bool    `json:"tor"`
	RecentAbuse     bool    `json:"recent_abuse"`
	Mobile          bool    `json:"mobile,omitempty"`
	Score           int8    `json:"score"`
	OperatingSystem string  `json:"operating_system,omitempty"`
	Browser         string  `json:"browser,omitempty"`
	DeviceModel     string  `json:"device_model,omitempty"`
	DeviceBrand     string  `json:"device_brand,omitempty"`
}
