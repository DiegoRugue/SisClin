const { promisify } = require('util');
const jwt = require('jsonwebtoken');
const config = require('../config/auth');

module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) res.error(401, 'Token não enviado');

  const [, token] = authHeader.split(' ');

  try {
    const { id } = await promisify(jwt.verify)(token, config.secret);

    req.userId = id;

    next();
  } catch (ex) {
    res.error(401, 'Token invalido');
  }
};
