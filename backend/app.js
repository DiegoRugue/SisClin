const express = require('express')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const extensoes = require('./src/service/extensoes')
const response = require('./src/service/middlewares/response')
const usuarioRouter = require('./src/core/usuario/controller')
const loginRouter = require('./src/core/login/controller')

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(response)


app.use('/usuario', usuarioRouter)
app.use('/login', loginRouter)

module.exports = app
