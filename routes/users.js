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

module.exports = router;
