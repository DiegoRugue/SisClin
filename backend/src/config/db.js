const promise = require('bluebird')

const initOptions = {
  promiseLib: promise
}

const pgp = require('pg-promise')(initOptions)

const cn = {
  database: 'hkwhmlsd',
  user: 'hkwhmlsd',
  password: 'Dtfg60266vAqymlr-mJcu2p4K5nGDdB1',
  host: 'tuffi.db.elephantsql.com',
  port: 5432
}

// postgres://uwwvjsou:SL85cCPXUbIxgXdPy6pSKzkfbjPOsx_F@raja.db.elephantsql.com:5432/uwwvjsou
const db = pgp(cn);

module.exports = db

