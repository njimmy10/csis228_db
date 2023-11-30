const { query } = require("../database/db")
const moment = require("moment");

const authenticate = async (username, password) => {
    try{
        let sql = `SELECT * FROM users WHERE USER_USERNAME = ? AND USER_PASSWORD = ?`;
        const user = await query(sql, [username, password]);    
        return user;
    }catch(error){
        throw new Error(error);
    }
}


const loadUser = async() => {
    try{
        let sql = `SELECT * FROM users`
        const users = await query(sql);
        return users;
    }catch(erorr){
        throw new Error(error);
    }
}

const loadSingleUser = async(id)=>{
    try{
        let sql = `SELECT * FROM users WHERE USER_ID = ?`;
        const user = await query(sql, [id]);
        return user;
    }catch(erorr){
        throw new Error(erorr);
    }
}

const insertUser = async(user) =>{
    const {USER_USERNAME, USER_FULL_NAME, USER_PROFILE_PICTURE, USER_BIO, USER_EMAIL, USER_PASSWORD, USER_DOB} = user;
    let inserSQL = `INSERT INTO user
    VALUES 
    (?, ?, ?, ?, ?, ?, ?)`;

    const result = await query(inserSQL, [USER_USERNAME, USER_FULL_NAME, USER_PROFILE_PICTURE, USER_BIO, USER_EMAIL, USER_PASSWORD, moment(USER_DOB).format("YYYY-MM-DD")]);

    return result;
}

const updateUser = async(user) =>{
    const {USER_USERNAME, USER_FULL_NAME, USER_PROFILE_PICTURE, USER_BIO, USER_EMAIL, USER_PASSWORD, USER_DOB} = user;
    let sql = `UPDATE user  
    SET USER_USERNAME = ?, USER_FULL_NAME = ?, USER_PROFILE_PICTURE = ?, USER_BIO = ?, USER_EMAIL = ?, USER_PASSWORD = ?, USER_DOB = ?
    WHERE USER_ID = ?`;

    const result = await query(sql, [USER_USERNAME, USER_FULL_NAME, USER_PROFILE_PICTURE, USER_BIO, USER_EMAIL, USER_PASSWORD, moment(USER_DOB).format("YYYY-MM-DD"), USER_ID]);

    return result
}

const deleteUser = async(id) =>{
    let sql = `DELETE FROM user WHERE USER_ID = ?`;
    const result = await query(sql, [id]);

    return result;
}



module.exports = {
    loadUser,
    loadSingleUser,
    insertUser,
    updateUser,
    deleteUser,
    authenticate
}