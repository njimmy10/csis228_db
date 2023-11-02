const express = require('express');
const router = express.Router();

const { getAllPostsController, getSinglePostController, insertPostController, updatePostController, deletePostController } = require('../controllers/postController');
const { postInsertValidator } = require('../validator/post-validator');
const { authenticateToken } = require('./middleware');


router.get('/posts', authenticateToken ,getAllPostsController);
router.get('/posts/:id',authenticateToken, getSinglePostController);
router.post('/posts', postInsertValidator, authenticateToken ,insertPostController);
router.put('/posts/:id', postInsertValidator, authenticateToken, updatePostController);
router.delete('/posts/:id', authenticateToken, deletePostController);

module.exports = router;




