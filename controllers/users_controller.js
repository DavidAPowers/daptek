require('dotenv').config();
const User = require("../models/user")
const jwt = require('jsonwebtoken');

class UsersController {
	static verify(req, res) {
		if(!req.body.token) {
			return res.status(400).send({msg: "Token required"});
		} else {
			let token = req.body.token;
			console.log("token!");
			console.log(token);
			jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
			  if(!decoded) {
					res.status(401).send({msg: err.message || "Server error."});
			  } else {
			  	console.log(decoded);
			  	res.send({msg: 'Verified!'});
			  }
			});	    
	  }
	}
	static generateJwt(user) {
		let expiry = new Date();
		expiry.setDate(expiry.getDate() + 7);
		return jwt.sign({
			_id: user._id,
			email: user.email,
			name: user.name,
			exp: parseInt(expiry.getTime() / 1000)
		}, process.env.SECRET_KEY);
	}
	static register(req, res) {
		if(!req.body.email || !req.body.password || !req.body.name) {
			return res.status(400).send({
				message: "Name, Email, and Password are required"
			});
		} else {
	    let u = new User({
	      email: req.body.email,
	      name: req.body.name
	    });
	    u.setPassword(req.body.password);
			u.save()
			.then(data => {
				res.json({msg: 'Successful created new user.'});
			}).catch(err => {
				res.status(500).send({
					message: err.message || "Some error occurred while creating the User."
				});
			});
	  }
	}
	static login(req, res) {
		if(!req.body.email || !req.body.password) {
			return res.status(400).send({msg: "Login failed, Email and Password are required"});
		} else {
			User.findOne({email: req.body.email})
			.then(user => {
				if(!user) {
					res.status(401).send({msg: 'Login failed, User not found.'});          
				}
				//user found, now validate password
	      if (user.validPassword(req.body.password)) {
	        let token = UsersController.generateJwt(user);
	        res.json({success: true, token: token});
	      } else {
	        res.status(401).send({msg: 'Login failed.'});
	      }			
			})
			.catch(err => {
				console.log(err);
				return res.status(500).send({msg: "Login failed, Server error authenticating user"});
			});   
	  }
	}
}

module.exports = UsersController;