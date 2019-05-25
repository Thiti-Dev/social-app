const express = require("express");
const authController = require("../controllers/auth");
const userController = require('../controllers/user')
const validator = require("../validator");

const router = express.Router();

router.post("/signup", validator.userSignupValidator,authController.signup);
router.post("/signin", authController.signin);
router.get('/signOut', authController.signout);

// any route containing :userId, our app will first execute userByID()
router.param("userId", userController.userById);
module.exports = router;
