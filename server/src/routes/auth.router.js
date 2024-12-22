const express = require('express');
const { StatusCodes } = require('http-status-codes');
const validatePayloadMiddleware = require('../middlewares/validate-payload.middleware');
const {registerPayloadSchema} = require("../validators/auth.schemas");
const authController = require("../controllers/auth.controller")
const AuthUser = require("../models/auth-user.model");


const authRouter = express.Router();

authRouter
    .route("/register")
    .post(validatePayloadMiddleware(registerPayloadSchema), authController.registerUser);



module.exports = authRouter;