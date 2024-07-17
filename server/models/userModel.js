const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    role:{
        type: String,
        default: 'basic',
        enum: ["admin", "user", "partner"]
    },
    otp:{
        type: String,
        default: null
    },
    otpExpire:{
        type: Date,
        default: null
    },
})

const User = mongoose.model('users', UserSchema);
module.exports = User;