const { StatusCodes } = require("http-status-codes");
const CustomError = require("./custom-error.error");

class BadRequestError extends CustomError{
    statusCode = StatusCodes.BAD_REQUEST;
    constructor(message){
        super(message);
    }

    toJSON(){
        return {
            errors: [
                {
                    message: this.message,
                    field: null
                }
            ]
        }
    }
}

module.exports = BadRequestError;