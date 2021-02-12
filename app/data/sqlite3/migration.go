package sqlite3

import "github.com/jmoiron/sqlx"

func MigrateDB(db *sqlx.DB) error {
	migrations := []func(db *sqlx.DB) error{
		createVpn,
		createDisposable,
		createGenericName,
		createSpam,
		createProxy,
	}
	for _, m := range migrations {
		if err := m(db); err != nil {
			return err
		}
	}
	return nil
}

func createVpn(db *sqlx.DB) error {
	_, err := db.Exec(`
        CREATE TABLE IF NOT EXISTS vpn (
            id INTEGER PRIMARY KEY,
            url TEXT NOT NULL CONSTRAINT uniq UNIQUE,
            created_at DATETIME NOT NULL,
            updated_at DATETIME NOT NULL
        )
    `)
	return err
}

func createDisposable(db *sqlx.DB) error {
	_, err := db.Exec(`
        CREATE TABLE IF NOT EXISTS disposable (
            id INTEGER PRIMARY KEY,
            url TEXT NOT NULL CONSTRAINT uniq UNIQUE,
            created_at DATETIME NOT NULL,
            updated_at DATETIME NOT NULL
        )
    `)
	return err
}

func createGenericName(db *sqlx.DB) error {
	_, err := db.Exec(`
        CREATE TABLE IF NOT EXISTS genericmail (
            id INTEGER PRIMARY KEY,
            name TEXT NOT NULL CONSTRAINT uniq UNIQUE,
            created_at DATETIME NOT NULL,
            updated_at DATETIME NOT NULL
        )
    `)
	return err
}

func createSpam(db *sqlx.DB) error {
	_, err := db.Exec(`
        CREATE TABLE IF NOT EXISTS spam (
            id INTEGER PRIMARY KEY,
            url TEXT NOT NULL CONSTRAINT uniq UNIQUE,
              subnet TEXT NOT NULL,
            created_at DATETIME NOT NULL,
            updated_at DATETIME NOT NULL
        )
    `)
	return err
}


func createProxy(db *sqlx.DB) error {
	_, err := db.Exec(`
        CREATE TABLE IF NOT EXISTS proxy (
            id INTEGER PRIMARY KEY,
            url TEXT NOT NULL CONSTRAINT uniq UNIQUE,
              type TEXT NOT NULL,
            created_at DATETIME NOT NULL,
            updated_at DATETIME NOT NULL
        )
    `)
	return err
}
