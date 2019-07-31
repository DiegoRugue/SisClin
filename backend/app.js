const express = require('express')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const response = require('./src/service/middlewares/response')

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
//app.use(response)

const usuarioRouter = require('./src/core/usuario/controller')
app.use('/usuario', usuarioRouter)

module.exports = app
