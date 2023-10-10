const express = require('express');
const { getAllUsersController, insertUserController } = require('../controllers/userController');
const { userSignupValidator } = require('../validator/user-validator');
const router = express.Router();

router.get('/getAllUsers', getAllUsersController);
router.post('/signup', userSignupValidator, insertUserController);

module.exports = router;