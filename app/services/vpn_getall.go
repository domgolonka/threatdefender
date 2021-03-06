package services

import (
	"github.com/domgolonka/foretoken/app"
)

func VpnGetCacheAll(app *app.App) (*[]string, error) {
	return app.VPNGenerator.Get()

}

func VpnGetDBAll(app *app.App) (*[]string, error) {
	return app.VpnStore.FindAllIPs()

}
