const express = require('express');
const router = express.Router();

const { getAllPostsController, getSinglePostController, insertPostController, updatePostController, deletePostController } = require('../controllers/postController');
const { postInsertValidator } = require('../validator/post-validator');


router.get('/posts', getAllPostsController);
router.get('/posts/:id', getSinglePostController);
router.post('/posts', postInsertValidator, insertPostController);
router.put('/posts/:id', postInsertValidator, updatePostController);
router.delete('/posts/:id', deletePostController);

module.exports = router;




