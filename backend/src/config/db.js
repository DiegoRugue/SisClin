const { Pool } = require('pg')

module.exports = {
  query: (text, params) => pool.query(text, params),
  select,
  exec
}

const pool = new Pool({
  user: 'postgres',
  host: '172.20.0.2',
  database: 'sisclin',
  password: 'admin',
  port: 5432
})

function select(procedure, params) {
  let text = `SELECT * FROM ${procedure}(`

  if (!params) {
    text += ')'
    return pool.query(text)
  }

  for (let i = 1; i <= params.length; i++) {
    text += `$${i}`
  }

  text += ')'

  return pool.query(text, params)

}

function exec(procedure, params) {
  let text = `SELECT ${procedure}(`

  if (!params) {
    text += ')'
    return pool.query(text)
  }
  
  for (let i = 1; i <= params.length; i++) {
    text += `$${i}`
  }

  text += ')'

  return pool.query(text, params)

}


