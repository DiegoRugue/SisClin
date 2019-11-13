const router = require('express').Router();

const UserController = require('./core/user/controller');
const SessionController = require('./core/session/controller');

router.post('/users', UserController.store);

router.post('/session', SessionController.store);

module.exports = router;
