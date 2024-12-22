const {StatusCodes} = require('http-status-codes');
const AuthUser = require("../models/auth-user.model");
const BadRequestError = require('../errors/bad-request.error');

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

module.exports = {
    registerUser
}