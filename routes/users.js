const express = require('express');
const router = express.Router();
const UsersController = require("../controllers/users_controller")

router.get('/', (req, res) => {
	res.send("hello");
});
router.post('/register', (req, res) => {
	UsersController.register(req,res);
});
router.post('/login', (req,res) => {
	UsersController.login(req,res);
});
router.post('/verify', (req,res) => {
	UsersController.verify(req,res);
});
router.use(function (err, req, res, next) {
  if (err) {
    console.log('Error', err);
  } else {
    console.log('404')
  }
});

module.exports = router;
