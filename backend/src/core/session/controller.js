const SessionService = require('./service');

class SessionController {
  static async store(req, res) {
    const result = await SessionService.store(req.body);

    res.ok(result);
  }
}

module.exports = SessionController;
