const express = require('express');
const { getAllUsersController, insertUserController, authenticateController, addUserForm, updateUserController, updateUserForm } = require('../controllers/userController');
const { userSignupValidator } = require('../validator/user-validator');
const { authenticateToken } = require('./middleware');
const router = express.Router();

router.post('/login', authenticateController);
router.get('/getAllUsers', authenticateToken ,getAllUsersController);
router.post('/signup', userSignupValidator, insertUserController);
router.put('/updateUser/:id', userSignupValidator, updateUserController);

router.get('/addUser', addUserForm)
router.get('/editUser/:id', updateUserForm)

module.exports = router;