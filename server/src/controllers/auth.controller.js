const jwt = require('jsonwebtoken');
const {StatusCodes} = require('http-status-codes');
const AuthUser = require("../models/auth-user.model");
const BadRequestError = require('../errors/bad-request.error');
const { comparePassword } = require('../utils/password.utils');
const NotAuthenticatedError = require('../errors/not-authenticated.error');
const config = require('../config');


async function registerUser(req, res) {

    const body = req.body;
    try{
        const authUser = await AuthUser.create({
            username: body.username,
            email: body.email,
            firstName: body.firstName,
            lastName: body.lastName,
            password: body.password,
            confirmPassword: body.confirmPassword
        })
        res.status(StatusCodes.CREATED).json(authUser)
    }
    catch(err){
        throw new BadRequestError(err.message);
    }
}

async function loginUser(req, res){
    const body = req.body;
    try{
        const {username, password} = body;
        const authUser = await AuthUser.findOne({username});
        const passwordMatched = await comparePassword(password, authUser.password);
        console.log({passwordMatched});
        if(passwordMatched){
            console.log("Password Matched")
            // create JWT token
            const token = jwt.sign(
                { id: authUser._id, email: authUser.email, username: authUser.username },
                config.JWT_SECRET
            );
            // send token in cookie
            req.session = {
                token
            }

            // send response
            res.status(StatusCodes.ACCEPTED).json({
                username: authUser.username,
                email: authUser.email
            })
        }
        else{
            console.log("password did not match")
            throw new Error("User is not Authenticated")
        }
    }
    catch(err){
        throw new NotAuthenticatedError(err.message);
    }
}

async function logoutUser(req, res){
    res.session = null;
    res.status(StatusCodes.OK).json({})
}

module.exports = {
    registerUser,
    loginUser,
    logoutUser
}