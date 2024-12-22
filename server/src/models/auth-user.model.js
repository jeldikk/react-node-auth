const mongoose = require('mongoose')


const authUserSchema = new mongoose.Schema({
    username: {
        type: String,
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
    }
}, {
    timestamps: true
})

const AuthUser = mongoose.model('AuthUser', authUserSchema);

module.exports = AuthUser;