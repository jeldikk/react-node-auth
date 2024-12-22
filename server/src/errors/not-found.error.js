const { StatusCodes, getReasonPhrase } = require("http-status-codes");
const CustomError = require("./custom-error.error");

class NotFoundError extends CustomError{
    statusCode = StatusCodes.NOT_FOUND;
    constructor(message){
        super(message);
        this.reason = getReasonPhrase(this.statusCode);
    }

    toJSON(){
        return {
            errors: [
                {
                    message: this.message,
                    fields: null
                }
            ]
        }
    }
}

module.exports = NotFoundError