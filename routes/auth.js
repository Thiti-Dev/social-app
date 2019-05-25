const express = require("express");
const authController = require("../controllers/auth");
const validator = require("../validator");

const router = express.Router();

router.post("/signup", validator.userSignupValidator,authController.signup);
router.post("/signin", authController.signin);
// signout
router.get('/signOut', authController.signout);
module.exports = router;
