const NotAuthenticatedError = require("../errors/not-authenticated.error")

function requireAuth(req, res, next){
    if(!req.currentUser){
        throw NotAuthenticatedError("User is not Authenticated");
    }
    next();
}

module.exports = requireAuth