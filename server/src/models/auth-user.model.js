const mongoose = require('mongoose');
const { hashPassword } = require('../utils/password.utils');


const authUserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true
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

// authUserSchema.methods.hashPassword = async function(password){

// }

authUserSchema.pre('save', async function(done){
    // this.password = 
    if(this.isModified('password')){
        const hashed = await hashPassword(this.get('password'));
        this.set('password', hashed);
    }
    done()
})

const AuthUser = mongoose.model('AuthUser', authUserSchema);

module.exports = AuthUser;