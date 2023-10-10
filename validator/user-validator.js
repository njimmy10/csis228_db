const { check } = require('express-validator');

exports.userSignupValidator = [
    check('USER_USERNAME').not().isEmpty().withMessage('Username is required'),
    check('USER_FULL_NAME').not().isEmpty().withMessage('Full name is required'),
    check('USER_EMAIL').isEmail().withMessage('Must be a valid email address'),
    check('USER_PASSWORD').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
];
