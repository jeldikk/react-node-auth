const { StatusCodes, getReasonPhrase } = require("http-status-codes");
const CustomError = require("./custom-error.error");

class ValidationError extends CustomError{
    statusCode = StatusCodes.BAD_REQUEST;
    constructor(errors){
        super("ValidationError");
        this.reason = getReasonPhrase(this.statusCode);
        this.errors = errors;
    }

    toJSON(){
        return {
            errors: this.errors
        }
    }
}

module.exports = ValidationError;