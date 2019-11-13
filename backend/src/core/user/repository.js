const User = require('../models/User');

class UserRepository {
  static async store(user) {
    const newUser = await User.create(user);

    return newUser;
  }

  static async findUserByEmail(email) {
    const user = await User.findOne({ where: { email } });

    return user;
  }
}

module.exports = UserRepository;
