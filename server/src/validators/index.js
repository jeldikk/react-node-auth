function validatePayloadSchema(schema, payload){
    if(!schema || !payload){
        throw new Error("Invalid arguments provided to validatePayloadSchema");
    }
    return schema.safeParse(payload)
}

module.exports = {
    validatePayloadSchema
}