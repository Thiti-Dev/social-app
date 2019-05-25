const express = require("express");
const userController = require("../controllers/user");
const authController = require('../controllers/auth')

const router = express.Router();

router.get("/userTest", authController.requireSignin,userController.testReqAuth);
router.get("/users", userController.allUsers);
router.get("/user/:userId", authController.requireSignin,userController.getUser);
router.put("/user/:userId", authController.requireSignin,userController.updateUser);
router.delete("/user/:userId", authController.requireSignin,userController.deleteUser);

// any route containing :userId, our app will first execute userByID()
router.param("userId", userController.userById);
module.exports = router;
