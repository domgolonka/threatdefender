package services

import (
	"github.com/domgolonka/threatscraper/app"
)

func DisposableGetCacheAll(app *app.App) (*[]string, error) {
	return app.DisposableGenerator.Get()

}

func DisposableGetDBAll(app *app.App) (*[]string, error) {
	return app.DisableStore.FindAll()

}
