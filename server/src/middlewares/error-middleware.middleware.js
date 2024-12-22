const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors/custom-error.error");

function errorMiddleware(err, req, res, next){
    if(err instanceof CustomError){
        res.status(err.statusCode).json(err.toJSON())
    }
    else{
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: "Something error happened on server side"
        })
    }
}

module.exports = errorMiddleware;