const express = require('express');
const { getAllUsersController,
    getSingleUserController,
    insertUserController,
    updateUserController } = require('../controllers/userControllerSeq'); 

const router = express.Router();

router.get('/getAllUsers', getAllUsersController);
router.get('/getSingleUser/:id', getSingleUserController);
router.post('/insertUser', insertUserController);
router.put('/updateUser', updateUserController);

module.exports = router;


