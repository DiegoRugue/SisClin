const express = require('express')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const response = require('./src/service/middlewares/response')
const usuarioRouter = require('./src/core/usuario/controller')

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(response)


app.use('/usuario', usuarioRouter)

module.exports = app
