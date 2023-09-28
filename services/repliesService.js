const { query } = require("../database/db")


const loadReplies = async() => {
    try{
        let sql = `SELECT * FROM replies`
        const replies = await query(sql);
        return replies;
    }catch(erorr){
        throw new Error(error);
    }
}

const loadSingleReply = async(id)=>{
    try{
        let sql = `SELECT * FROM replies WHERE REPLY_ID = ?`;
        const reply = await query(sql, [id]);
        return reply;
    }catch(erorr){
        throw new Error(erorr);
    }
}

const insertReply = async(reply) =>{
    const {REPLY_BODY, COMMENT_ID, REPLY_CREATION_DATE, USER_ID} = reply;
    let inserSQL = `INSERT INTO replies
    VALUES 
    (?, ?, ?, ?)`;

    const result = await query(sql, [REPLY_BODY, COMMENT_ID, moment(REPLY_CREATION_DATE).format("YYYY-MM-DD"), USER_ID]);

    return result;
}

const updateReply = async(reply) =>{
    const {REPLY_BODY, COMMENT_ID, REPLY_CREATION_DATE, USER_ID} = reply;
    let sql = `UPDATE replies
    SET REPLY_BODY = ?, COMMENT_ID = ?, REPLY_CREATION_DATE = ?, USER_ID = ?
    WHERE REPLY_ID = ?`;

    const result = await query(sql, [REPLY_BODY, COMMENT_ID, moment(REPLY_CREATION_DATE).format("YYYY-MM-DD"), USER_ID, REPLY_ID]);

    return result
}

const deleteReply = async(id) =>{
    let sql = `DELETE FROM replies WHERE REPLY_ID = ?`;
    const result = await query(sql, [id]);

    return result;
}


module.exports = {  
    loadReplies,
    loadSingleReply,
    insertReply,
    updateReply,
    deleteReply
}