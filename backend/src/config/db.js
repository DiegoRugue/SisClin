const { Pool } = require('pg')

module.exports = {
  exec: (procedure, params) => pool.query(`EXEC ${procedure}`, params),
  query: (text, params) => pool.query(text, params),
  select
}

const pool = new Pool({
    user: 'postgres',
    host: '172.23.0.2',
    database: 'postgres',
    password: 'admin',
    port: 5432
  })

function select(procedure, params) {
  let text = `SELECT * FROM ${procedure}(`;

  for(let i = 0; i < params.length; i++) {
    text += `$${i}`
  }

  text += ')'

  return pool.query(text, params)
}


