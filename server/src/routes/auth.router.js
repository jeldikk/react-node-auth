const express = require('express');
const { StatusCodes } = require('http-status-codes');
const validatePayloadMiddleware = require('../middlewares/validate-payload.middleware');
const {registerPayloadSchema} = require("../validators/auth.schemas")

const authRouter = express.Router();

authRouter
    .route("/register")
    .post(validatePayloadMiddleware(registerPayloadSchema), async (req, res) => {
        const body = req.body;

        console.log({body});

        res.status(StatusCodes.CREATED).json({...body})
    })



module.exports = authRouter;