const { Pool } = require('pg')

const pool = new Pool({
    user: 'postgres',
    host: '172.20.0.2',
    database: 'sisclin',
    password: 'admin',
    port: 5432,
  })

module.exports = {
    exec: (procedure, params) => pool.query(`EXEC ${procedure}`, params),
    query: (text, params) => pool.query(text, params)
}


