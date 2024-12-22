const jwt = require('jsonwebtoken');
const config = require('../config');
const BadRequestError = require('../errors/bad-request.error');

async function validateUser(req, res, next){
    if(!req.session.token){
        req.currentUser = null;
    }

    try{
        const tokenPayload = await jwt.verify(
            req.session?.token,
            config.JWT_SECRET
        );
        req.currentUser = {
            email: tokenPayload.email,
            username: tokenPayload.username,
            id: tokenPayload.id
        }
    }
    catch(err){
        throw new BadRequestError("System Error occurred");
    }
    next()
}

module.exports = validateUser;