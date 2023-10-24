const User = require('../model/User');

const getAllUsers = async() => {
    const users = await User.findAll();
    return users;
}

const getSingleUser = async(id) => {
    const user = await User.findByPk(id);
    return user;
}

const insertUser = async(user) => {
    const {USER_USERNAME, USER_FULL_NAME, USER_PROFILE_PICTURE, USER_BIO, USER_EMAIL, USER_PASSWORD, USER_DOB} = user;
    const newUser = await User.create({
        USER_USERNAME,
        USER_FULL_NAME,
        USER_PROFILE_PICTURE,
        USER_BIO,
        USER_EMAIL,
        USER_PASSWORD,
        USER_DOB
    });
    return newUser;
}

const updateUser = async(user) => {
    const {USER_USERNAME, USER_FULL_NAME, USER_PROFILE_PICTURE, USER_BIO, USER_EMAIL, USER_PASSWORD, USER_DOB} = user;
    const updatedUser = await User.update({
        USER_USERNAME,
        USER_FULL_NAME,
        USER_PROFILE_PICTURE,
        USER_BIO,
        USER_EMAIL,
        USER_PASSWORD,
        USER_DOB
    }, {
        where: {USER_ID: user.USER_ID}
    });
    return updatedUser;
}

const deleteUser = async(id) => {
    const deletedUser = await User.destroy({
        where: {USER_ID: id}
    });
    return deletedUser;
}

module.exports = {
    getAllUsers,
    getSingleUser,
    insertUser,
    updateUser,
    deleteUser
}

