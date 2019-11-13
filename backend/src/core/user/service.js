const UserRepository = require('./repository');

class UserService {
  static async store(user) {
    await this.checkUserEmail(user.email);

    const newUser = await UserRepository.store(user);

    return newUser;
  }

  static async checkUserEmail(email) {
    const userExists = await UserRepository.findUserByEmail(email);

    if (userExists) throw { code: 400, message: 'E-mail já cadastrado' };

    return true;
  }
}

module.exports = UserService;
