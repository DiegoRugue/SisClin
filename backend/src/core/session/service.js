const jwt = require('jsonwebtoken');
const config = require('../../config/auth');
const UserRepository = require('../user/repository');

class SessionService {
  static async store(user) {
    const userSession = await this.validateUserEmail(user.email, user.password);

    return this.generateToken(userSession);
  }

  static async validateUserEmail(email, password) {
    const user = await UserRepository.findUserByEmail(email);

    if (!user || (user && !await user.checkPassword(password))) {
      throw { code: 404, message: 'E-mail ou senha invalidos' };
    }

    return user;
  }

  static generateToken(user) {
    const { id, name, email } = user;

    return {
      user: {
        name,
        email,
      },
      token: jwt.sign({ id }, config.secret, {
        expiresIn: config.expiresIn,
      }),
    };
  }
}

module.exports = SessionService;
