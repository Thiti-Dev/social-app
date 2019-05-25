const express = require('express');
const postController = require('../controllers/post')
const authController = require('../controllers/auth');
const userController = require("../controllers/user");
const validator = require('../validator')

const router = express.Router();

router.get('/',postController.getPosts);
router.post('/post', authController.requireSignin,validator.createPostValidator,postController.createPost);

// any route containing :userId, our app will first execute userByID()
router.param("userId", userController.userById);

module.exports = router;