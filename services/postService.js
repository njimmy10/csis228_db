const { query } = require("../database/db")


const loadPosts = async() => {
    try{
        let sql = `SELECT * FROM posts`
        const posts = await query(sql);
        return posts;
    }catch(erorr){
        throw new Error(error);
    }
}

const loadSinglePost = async(id)=>{
    try{
        let sql = `SELECT * FROM posts WHERE POST_ID = ?`;
        const post = await query(sql, [id]);
        return post;
    }catch(erorr){
        throw new Error(erorr);
    }
}

const insertPost = async(post) =>{
    const {POST_TITLE, POST_BODY, POST_ATTACHMENT, POST_CREATION_DATE, POST_USER_ID} = post;
    let inserSQL = `INSERT INTO posts
    VALUES 
    (?, ?, ?, ?, ?)`;

    const result = await query(inserSQL, [POST_TITLE, POST_BODY, POST_ATTACHMENT, moment(POST_CREATION_DATE).format("YYYY-MM-DD"), POST_USER_ID]);

    return result;
}

const updatePost = async(post) =>{
    const {POST_TITLE, POST_BODY, POST_ATTACHMENT, POST_CREATION_DATE, POST_USER_ID} = post;
    let sql = `UPDATE posts  
    SET POST_TITLE = ?, POST_BODY = ?, POST_ATTACHMENT = ?, POST_CREATION_DATE = ?, POST_USER_ID = ?
    WHERE POST_ID = ?`;

    const result = await query(sql, [POST_TITLE, POST_BODY, POST_ATTACHMENT, moment(POST_CREATION_DATE).format("YYYY-MM-DD"), POST_USER_ID, POST_ID]);

    return result
}

const deletePost = async(id) =>{
    let sql = `DELETE FROM posts WHERE POST_ID = ?`;
    const result = await query(sql, [id]);

    return result;
}


module.exports = {
    loadPosts,
    loadSinglePost,
    insertPost,
    updatePost,
    deletePost
}