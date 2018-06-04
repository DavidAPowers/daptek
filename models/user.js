const mongoose = require('mongoose');
const jwt = require('jwt');
const crypto = require('crypto');

let UserSchema = new mongoose.Schema({
  email: {type: String, required: true, unique: true },
  name: {type: String, required: true},
  hash: String,
  salt: String,
  createdAt: {type: Date, default: Date.now}
});

class UserMethods {
	setPassword(password) {

	}
	validPassword(password) {}
	generateJwt() {}

}
UserSchema.loadClass(UserMethods);

let User = mongoose.model('User', UserSchema);
module.exports = User;