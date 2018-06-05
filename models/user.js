const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

let UserSchema = new mongoose.Schema({
  email: {type: String, required: true, unique: true },
  name: {type: String, required: true},
  hash: {type: String, required: true},
  salt: String,
  createdAt: {type: Date, default: Date.now}
});

class UserMethods {
	setPassword(password) {
		this.salt = crypto.randomBytes(16).toString('hex');
		this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
	}
	validPassword(password) {
		let hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
		return this.hash === hash;
	}

}
UserSchema.loadClass(UserMethods);

let User = mongoose.model('User', UserSchema);
module.exports = User;