const ValidationError = require("../errors/validation-error.error");
const { validatePayloadSchema } = require("../validators");


function validatePayloadMiddleware(schema){
    return (req, res, next) => {
        const payload = req.body;
        const validation = validatePayloadSchema(schema, payload);
        if(!validation.success){
            throw new ValidationError(validation.error.issues)
        }
        else{
            next()
        }
    }
}

module.exports = validatePayloadMiddleware;