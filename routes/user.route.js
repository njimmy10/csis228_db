const express = require('express');
const { getAllUsersController, insertUserController, authenticateController } = require('../controllers/userController');
const { userSignupValidator } = require('../validator/user-validator');
const { authenticateToken } = require('./middleware');
const router = express.Router();

router.post('/login', authenticateController);
router.get('/getAllUsers', authenticateToken ,getAllUsersController);
router.post('/signup', userSignupValidator, insertUserController);

module.exports = router;