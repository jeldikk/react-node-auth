const {z} = require('zod');

const registerPayloadSchema = z.object({
    username: z.string().min(5).max(20),
    email: z.string().email(),
    password: z.string().min(8),
    confirmPassword: z.string().min(8)
});

module.exports = {
    registerPayloadSchema
}