const express = require("express");
const userRouter = express.Router();
const userController = require("../controllers/UserController");

userRouter.post("/api/v1/auth/user", userController.addNewUser);
userRouter.post("/api/v1/auth/login", userController.loginUser);

module.exports = userRouter;
