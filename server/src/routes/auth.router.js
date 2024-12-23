const express = require('express');
const { StatusCodes } = require('http-status-codes');
const validatePayloadMiddleware = require('../middlewares/validate-payload.middleware');
const validateUserMiddleware = require("../middlewares/validate-user.middleware");
const {registerPayloadSchema, loginPayloadSchema} = require("../validators/auth.schemas");
const authController = require("../controllers/auth.controller")


const authRouter = express.Router();

authRouter
    .route("/register")
    .post(validatePayloadMiddleware(registerPayloadSchema), authController.registerUser);

authRouter
    .route("/login")
    .post(validatePayloadMiddleware(loginPayloadSchema), authController.loginUser);

authRouter
    .route('/logout')
    .post(authController.logoutUser)

authRouter
    .route("/current-user")
    .get(validateUserMiddleware, authController.getCurrentUser)



module.exports = authRouter;