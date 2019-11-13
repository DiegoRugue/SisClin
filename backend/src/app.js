require('./bootstrap');

const express = require('express');
require('express-async-errors');

const Sentry = require('@sentry/node');
const Youch = require('youch');
const response = require('./middleweres/response');
const routes = require('./routes');

require('./database');

class App {
  constructor() {
    this.server = express();
    Sentry.init({ dsn: process.env.DSN });

    this.middlewares();
    this.routes();
    this.exceptionHandler();
  }

  middlewares() {
    this.server.use(Sentry.Handlers.requestHandler());
    this.server.use(express.json());
    this.server.use(response);
  }

  routes() {
    this.server.use(routes);
    this.server.use(Sentry.Handlers.errorHandler());
  }

  exceptionHandler() {
    // eslint-disable-next-line no-unused-vars
    this.server.use(async (err, req, res, next) => {
      if (process.env.NODE_ENV === 'dev') {
        const errors = await new Youch(err, req).toJSON();

        res.error(500, errors);
      }
      if (err.code && err.message) res.error(err.code, err.message);

      res.error(500, 'Ops! Erro no servidor, já estamos trabalhando para corrigir!');
    });
  }
}

module.exports = new App().server;
