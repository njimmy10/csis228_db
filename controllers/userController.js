const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
const { loadUser, insertUser, authenticate, loadSingleUser, updateUser} = require("../services/userService")



const authenticateController = async(req, res) => {
    const {username, password} = req.body;
    if (!username || !password) {
        return res.status(401).json({message: "Username and password are required"})
    }
    try{
        const user = await authenticate(username, password);
        if (!user) {
            return res.status(401).json({message: "Username or password is incorrect"})
        }
        const accessToken = jwt.sign({username: user.USER_USERNAME, id: user.USER_ID}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "1h"});
        res.status(200).json({accessToken});
    }catch(error){
        res.status(500).json({message: "Internal server error"})
    }
}



            

const getAllUsersController = async(req, res) => {
    /**
     *this is a call back function of the same execution.
     *loadUser().then((result)=>{
      *  res.status(200).json({result});})
     */
    try{
        const users = await loadUser();
        res.status(200).json({users});
    }catch(error){
        res.status(500).json({message: "Internal server error"})
    }
}

const updateUserController = async(req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }
    
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
        const result = await updateUser(user);
        res.status(200).json({result});
    }catch(error){
        res.status(500).json({message: "Internal server error"})
    }
}


const insertUserController = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }

    
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

const getUserByIdController = async(req, res) => {
    const {id} = req.params;
    try{
        const user = await loadSingleUser(id);
        res.status(200).json({user});
    }catch(error){
        res.status(500).json({message: "Internal server error"})
    }
}

const addUserForm = (req, res) => {
    res.render("addUser");
}

const updateUserForm =async(req, res) => {
    const {id} = req.params;

    const user = await loadSingleUser(id);
    console.log(user);
    res.render("editUser", {user});
}


module.exports = {
    getAllUsersController,
    insertUserController,
    authenticateController,
    addUserForm,
    updateUserForm,
    updateUserController,
    getUserByIdController
}