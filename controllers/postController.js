const { validationResult } = require("express-validator");
const {
  loadPosts,
  loadSinglePost,
  insertPost,
  updatePost,
  deletePost,
} = require("../services/postService");

const getAllPostsController = async (req, res) => {
    try {
        const posts = await loadPosts();
        res.status(200).json({ posts });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
    };

const getSinglePostController = async (req, res) => {
    const { id } = req.params;
    try {
        const post = await loadSinglePost(id);
        res.status(200).json({ post });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
    }

const insertPostController = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { POST_TITLE, POST_BODY, POST_ATTACHMENT, POST_CREATION_DATE, POST_USER_ID } = req.body;
    const post = {
        POST_TITLE,
        POST_BODY,
        POST_ATTACHMENT,
        POST_CREATION_DATE,
        POST_USER_ID,
    };
    try {
        const result = await insertPost(post);
        res.status(200).json({ result });
    } catch (error) {
        res.status(500).json({ message: error });
    }
    }

const updatePostController = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { POST_TITLE, POST_BODY, POST_ATTACHMENT, POST_CREATION_DATE, POST_USER_ID } = req.body;
    const post = {
        POST_TITLE,
        POST_BODY,
        POST_ATTACHMENT,
        POST_CREATION_DATE,
        POST_USER_ID,
    };
    try {
        const result = await updatePost(post);
        res.status(200).json({ result });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
    }

const deletePostController = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await deletePost(id);
        res.status(200).json({ result });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
    }

module.exports = {
    getAllPostsController,
    getSinglePostController,
    insertPostController,
    updatePostController,
    deletePostController,
};
