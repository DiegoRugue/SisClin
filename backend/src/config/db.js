const promise = require('bluebird')

const initOptions = {
  promiseLib: promise
}

const pgp = require('pg-promise')(initOptions)

const cn = {
  database: 'sisclin',
  user: 'postgres',
  password: 'admin',
  host: '172.20.0.2',
  port: 5432
}

// postgres://uwwvjsou:SL85cCPXUbIxgXdPy6pSKzkfbjPOsx_F@raja.db.elephantsql.com:5432/uwwvjsou
const db = pgp(cn);

module.exports = db

