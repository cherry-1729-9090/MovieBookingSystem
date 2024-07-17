const Theatre = require('../models/TheatreModel');

const addTheatre = async(req,res)=>{
    try{
        const {name,location,phone,owner} = req.body.values;
        const theatre = new Theatre({
            name,
            location,
            phone,
            owner
        });

        await theatre.save();
        res.send({
            success: true,
            message: "Theatre added successfully!"
        });

    }
    catch(error){
        console.log(error);
    }
}


const getAllTheatres = async(req,res)=>{
    try{
        const theatres = await Theatre.find();
        res.send({
            success: true,
            theatres
        });
    }
    catch(error){
        console.log(error);
    }
}

const updateTheatre = async(req,res)=>{
    try{
        await Theatre.findByIdAndUpdate(req.body.id,req.body.values);
        res.send({
            success: true,
            message: "Theatre updated successfully!"
        });
    }
    catch(error){
        console.log(error);
    }
}


const delteTheatre = async(req,res)=>{
    try{
        await Theatre.findByIdAndDelete(req.body.id);
        res.send({
            success: true,
            message: "Theatre deleted successfully!"
        });
    }
    catch(error){
        console.log(error);
    }
}


module.exports = {addTheatre,getAllTheatres,updateTheatre,delteTheatre}