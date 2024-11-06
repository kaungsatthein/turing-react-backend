const express = require('express');
const router = express.Router();
const users = require("../controllers/UserController")

router.post('/register', users.register);
router.post('/login', users.login);

module.exports = router;
