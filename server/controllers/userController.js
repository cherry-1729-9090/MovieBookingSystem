const User = require('../models/userModel');

const login = async (req,res) => {
    try{
        const {email,password} = req.body;
        const response = await User.findOne({email,password});
    }
    catch(error){
        console.log(error);
    }
}