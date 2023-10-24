const {getAllUsers,getSingleUser, insertUser , updateUser, deleteUser
} = require("../services/userServiceSequelize")

const getAllUsersController = async(req, res) => {
    try{
        const users = await getAllUsers();
        res.status(200).json({users});
    }catch(error){
      console.log(error);
        res.status(500).json({message: error.message})
    }
}

const getSingleUserController = async(req, res) => {
    const {id} = req.params;
    try{
        const user = await getSingleUser(id);
        res.status(200).json({user});
    }catch(error){
        res.status(500).json({message: "Internal server error"})
    }
}

const insertUserController = async(req, res) => {
    const {USER_USERNAME, USER_FULL_NAME, USER_PROFILE_PICTURE, USER_BIO, USER_EMAIL, USER_PASSWORD, USER_DOB} = req.body;
    const user = {
        USER_USERNAME,
        USER_FULL_NAME,
        USER_PROFILE_PICTURE,
        USER_BIO,
        USER_EMAIL,
        USER_PASSWORD,
        USER_DOB
    }
    try{
        const result = await insertUser(user);
        res.status(200).json({result});
    }catch(error){
        res.status(500).json({message: "Internal server error"})
    }
}

const updateUserController = async(req, res) => {
    const {USER_ID, USER_USERNAME, USER_FULL_NAME, USER_PROFILE_PICTURE, USER_BIO, USER_EMAIL, USER_PASSWORD, USER_DOB} = req.body;
    const user = {
        USER_ID,
        USER_USERNAME,
        USER_FULL_NAME,
        USER_PROFILE_PICTURE,
        USER_BIO,
        USER_EMAIL,
        USER_PASSWORD,
        USER_DOB
    }
    try{
        const result = await updateUser(user);
        res.status(200).json({result});
    }catch(error){
        res.status(500).json({message: "Internal server error"})
    }
}

const deleteUserController = async(req, res) => {
    const {id} = req.params;
    try{
        const result = await deleteUser(id);
        res.status(200).json({result});
    }catch(error){
        res.status(500).json({message: "Internal server error"})
    }
}

module.exports = {
    getAllUsersController,
    getSingleUserController,
    insertUserController,
    updateUserController,
    deleteUserController
}
