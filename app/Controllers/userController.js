const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET || 'secretword';

class UserController {

  async createUser(user) {
    user.password = await bcrypt.hash(user.password,5)
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

  async updateUser(id,user) {
    return User.findByIdAndUpdate(id, user, {new: true});
  };

  async deleteUser(id) {
    return User.findByIdAndRemove(id);
  };

  async userById(id) {
    return User.findById(id);
  };

  async userAll() {
    return User.find();
  };

};

const userController = new UserController;
module.exports = userController;