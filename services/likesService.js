const { query } = require("../database/db");
const { loadSingleUser } = require("./userService");


const loadLikes = async() => {
    try{
        let sql = `SELECT * FROM likes`
        const likes = await query(sql);
        return likes;
    }catch(erorr){
        throw new Error(error);
    }
}

const loadSingleLike = async(id)=>{
    try{
        let sql = `SELECT * FROM likes WHERE LIKE_ID = ?`;
        const like = await query(sql, [id]);
        return like;
    }catch(erorr){
        throw new Error(erorr);
    }
}

const insertLike = async(like) =>{
    const {POST_ID, COMMENT_ID, USER_ID, REPLY_ID} = like;
    let inserSQL = `INSERT INTO likes
    VALUES 
    (?, ?)`;

    const result = await query(sql, [POST_ID, COMMENT_ID, USER_ID, REPLY_ID]);

    return result;
}

const updateLike = async(like) =>{
    const {POST_ID, COMMENT_ID, USER_ID, REPLY_ID} = like;
    let sql = `UPDATE likes
    SET POST_ID = ?, COMMENT_ID = ?, USER_ID = ?, REPLY_ID = ?
    WHERE LIKE_ID = ?`;

    const result = await query(sql, [POST_ID, COMMENT_ID, USER_ID, REPLY_ID, LIKE_ID]);

    return result
}

const deleteLike = async(id) =>{
    let sql = `DELETE FROM likes WHERE LIKE_ID = ?`;
    const result = await query(sql, [id]);

    return result;
}

const getLikesByPostId = async(id) =>{
    let sql = `SELECT * FROM likes WHERE POST_ID = ?`;
    const result = await query(sql, [id]);

    return result;
}

const getLikedUsersToPost = async(id) =>{
    const likes = await getLikesByPostId(id);
    const users = [];
    for(let like of likes){
        const user = await loadSingleUser(like.USER_ID);
        users.push(user);
    }
    return users;
}

module.exports = {
    loadLikes,
    loadSingleLike,
    insertLike,
    updateLike,
    deleteLike,
    getLikesByPostId,
    getLikedUsersToPost
}