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

const db = pgp(cn);

module.exports = db

