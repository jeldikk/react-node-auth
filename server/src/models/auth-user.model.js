const mongoose = require('mongoose')


const authUserSchema = new mongoose.Schema({
    username: {
        type: String,
    },
    firstName: {
        type:String
    },
    lastName: {
        type:String
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

authUserSchema.pre('save', async function(done){
    // this.password = 
})

const AuthUser = mongoose.model('AuthUser', authUserSchema);

module.exports = AuthUser;