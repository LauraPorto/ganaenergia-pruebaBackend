const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET || 'secretword';

class UserController {

  async create(user) {
    user.password = await bcrypt.hash(user.password,5)
    console.log(user)
   return User.create(user);
  };


  async login(email,password) {
    const user =  await User.findOne({email});
    if(!user){
        throw new Error('The email does not exist')
    }
    if(!await bcrypt.compare(password,user.password)){
        throw new Error('Wrong password')
    };

    const payload = {
        userId: user.id,
        tokenCreationDate: new Date,
    }

    const token = jwt.sign(payload, secret);
    return {token, user};
    
  };

  async update(id,user) {
    return User.findByIdAndUpdate(id,user);
  };

  async delete(id) {
    return User.findByIdAndRemove(id);
  }

  async userById(id) {
    return User.findById(id);
  }

  async userAll(allUser) {
    return User.find(allUser);
  }

};

const userController = new UserController;
module.exports = userController;