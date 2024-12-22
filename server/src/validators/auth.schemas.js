const {z} = require('zod');

const registerPayloadSchema = z.object({
    username: z.string().min(5).max(20),
    firstName: z.string().min(5).max(50),
    lastName: z.string().min(5).max(50),
    email: z.string().email(),
    password: z.string().min(8),
    confirmPassword: z.string().min(8)
})
.refine((data) => data.password === data.confirmPassword, {
    message: "password and confirmation password should match"
});

module.exports = {
    registerPayloadSchema
}