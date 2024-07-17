const { Message } = require('twilio/lib/twiml/MessagingResponse');
const User = require('../models/userModel');
const bcrypt = require('bcryptjs');

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email:req.body.email });
        if(! user){
            res.send({
                success: false,
                message: "User not found!",
            });
        }

        const isMatch = bcrypt.compareSync(password, user.password);
        if(! isMatch){
            res.send({
                success: false,
                message: "Invalid password!",
            });
        }

        res.send({
            success:true,
            message: 'User logged in Scuccessfully!',
        })
    }   
    catch (error) {
        console.log(error);
    }
}

const signin = async (req, res) => {
    try {
        const userExists = await User.findOne({ email: req.body.email });
        if (userExists) {
            res.send({
                success: false,
                message: "The user already exists!",
            });
        }
        const salt = await bcrypt.genSalt(10);
        console.log(salt);
        const hashPwd = bcrypt.hashSync(req.body.password, salt);
        console.log(hashPwd);
        req.body.password = hashPwd;


        const newUser = await User(req.body);
        await newUser.save();
        res.send({
            success: true,
            message: "You've successfully signed up, please login now!",
        });
    } catch (err) {
        console.log(err);
    }
}



module.exports = {
    login,
    signin
}