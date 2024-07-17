const mongoose = require('mongoose');

const TheatreSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true
    },
    owner :{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    isActive:{
        type: Boolean,
        default: true
    },
},{timestamps : true});



let Theatre = mongoose.model('Theatre', TheatreSchema);

module.exports = Theatre