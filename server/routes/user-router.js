const express = require('express');
const router = express.Router();

// Load User model
const userController = require('../controllers/user-ctrl');
// @route POST api/users/register
// @desc Register user
// @access Public
router.post('/user/register', userController.createUser);
// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post('/user/login', userController.login);

module.exports = router;
