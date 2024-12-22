class CustomError extends Error{
    constructor(message){
        super(message);
        this.message = message;
    }

    toJSON(){
        throw new Error("error serialization is not implemented")
    }
}

module.exports = CustomError