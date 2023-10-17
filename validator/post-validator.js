const { check } = require('express-validator');

exports.postInsertValidator = [
    check('POST_TITLE').not().isEmpty().withMessage('Title is required'),
    check('POST_BODY').not().isEmpty().withMessage('Body is required'),
    check('POST_USER_ID').not().isEmpty().withMessage('User ID is required'),
];

