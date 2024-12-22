const { StatusCodes, getReasonPhrase } = require("http-status-codes");
const CustomError = require("./custom-error.error");

class NotAuthenticatedError extends CustomError{
    statusCode = StatusCodes.FORBIDDEN;
    constructor(message){
        super(message);
        this.reason = getReasonPhrase(StatusCodes.FORBIDDEN);
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

module.exports = NotAuthenticatedError;