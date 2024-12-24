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
        res.status(StatusCodes.CREATED).json({
            id: authUser.id,
            username: authUser.username,
            email: authUser.email,
            firstName: authUser.firstName,
            lastName: authUser.lastName
        })
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
        if(passwordMatched){
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
            throw new Error("User is not Authenticated")
        }
    }
    catch(err){
        throw new NotAuthenticatedError(err.message);
    }
}

function getCurrentUser(req, res){
    const user = req.currentUser
    if(!user){
        throw NotAuthenticatedError("Not Authenticated");
    }
    else{
        res.status(StatusCodes.OK).json({
            ...user
        })
    }
}

async function logoutUser(req, res){
    res.session = null;
    res.clearCookie('session-token');
    res.status(StatusCodes.OK).json({})
}

module.exports = {
    registerUser,
    loginUser,
    getCurrentUser,
    logoutUser
}