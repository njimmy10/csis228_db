const { query } = require("../database/db")


const loadComments = async() => {
    try{
        let sql = `SELECT * FROM comments`
        const comments = await query(sql);
        return comments;
    }catch(erorr){
        throw new Error(error);
    }
}

const loadSingleComment = async(id)=>{
    try{
        let sql = `SELECT * FROM comments WHERE COMMENT_ID = ?`;
        const comment = await query(sql, [id]);
        return comment;
    }catch(erorr){
        throw new Error(erorr);
    }
}

const insertComment = async(comment) =>{
    const {POST_ID, COMMENT_BODY, COMMENT_CREATION_DATE, USER_ID} = comment;
    let inserSQL = `INSERT INTO comments
    VALUES 
    (?, ?, ?, ?)`;

    const result = await query(sql, [POST_ID, COMMENT_BODY, moment(COMMENT_CREATION_DATE).format("YYYY-MM-DD"), USER_ID]);

    return result;
}

const updateComment = async(comment) =>{
    const {POST_ID, COMMENT_BODY, COMMENT_CREATION_DATE, USER_ID} = comment;
    let sql = `UPDATE comments
    SET POST_ID = ?, COMMENT_BODY = ?, COMMENT_CREATION_DATE = ?, USER_ID = ?
    WHERE COMMENT_ID = ?`;

    const result = await query(sql, [POST_ID, COMMENT_BODY, moment(COMMENT_CREATION_DATE).format("YYYY-MM-DD"), USER_ID, COMMENT_ID]);

    return result
}

const deleteComment = async(id) =>{
    let sql = `DELETE FROM comments WHERE COMMENT_ID = ?`;
    const result = await query(sql, [id]);

    return result;
}


module.exports = {
    loadComments,
    loadSingleComment,
    insertComment,
    updateComment,
    deleteComment
}