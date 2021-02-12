package sqlite3

import (
	"database/sql"
	"fmt"
	"strings"

	"github.com/jmoiron/sqlx"
	// load sqlite3 library with side effects
	_ "github.com/mattn/go-sqlite3"
)

func NewDB(env string) (*sqlx.DB, error) {
	// https://github.com/mattn/go-sqlite3/issues/274#issuecomment-232942571
	// enable a busy timeout for concurrent load. keep it short. the busy timeout can be harmful
	// under sustained load, but helpful during short bursts.

	// this block used to keep backward compatibility
	if !strings.Contains(env, ".") {
		env = "./" + env + ".db"
	}
	fmt.Printf(env)

	return sqlx.Connect("sqlite3", fmt.Sprintf("%v?cache=shared&_busy_timeout=200", env))
}

func ok(result sql.Result, err error) (bool, error) {
	if err != nil {
		return false, err
	}
	count, err := result.RowsAffected()
	return count > 0, err
}