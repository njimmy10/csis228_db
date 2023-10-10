const { validationResult } = require("express-validator");
const { loadUser, insertUser } = require("../services/userService")

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

const insertUserController = async(req, res) => {
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


module.exports = {
    getAllUsersController,
    insertUserController
}