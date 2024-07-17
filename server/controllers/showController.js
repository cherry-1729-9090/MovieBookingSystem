const Show = require('../models/showModel');

const addShow = async(req,res) => {
    try{
        const {name, movie, theatre, date, time, ticketPrice, totalSeats} = req.body;
        const show = new Show({
            name,
            movie,
            theatre,
            date,
            time,
            ticketPrice,
            totalSeats
        });
        await show.save();
        res.status(201).send('Show added successfully');
    } catch(err){
        res.status(400).send(err);
    }
}

const getAllShowsbyTheatre = async(req,res) => {
    try{
        const shows = await Show.find({theatre: req.params.theatre}).populate('movie').populate('theatre');
        res.send({
            success : true,
            message : 'Shows fetched successfully',
            data : shows
        });
    }catch(err){
        res.status(400).send(err);
    }
}


const deleteShow = async(req,res) =>{
    try{
        await Show.findByIdAndDelete(req.params.id);
        res.send({
            success : true,
            message : 'Show deleted successfully'
        });
    }
    catch(err){
        res.status(400).send({
            success : false,
            message : 'Show not found'
        });
    }
}


const getAllTheatresbyMovie = async(req,res) => {
    try{
        const shows = await Show.find({movie: req.params.movie}).populate('movie').populate('theatre');

        let uniqueTheatres = [];
        shows.forEach(show => {
            let isTheatre = uniqueTheatres.find(theatre => theatre._id === show.theatre._id);
            if(!isTheatre){
                let showsOfThisTheatre = shows.filter(showObj => showObj.theatre._id == show.theatre._id);
                uniqueTheatres.push({...show.theatre._doc, shows: showsOfThisTheatre});
            }
        });
        res.send({
            success : true,
            message : 'Theatres fetched successfully',
            data : uniqueTheatres
        })
    }catch(err){
        res.status(400).send(err);
    }
}


const getShowById = async(req,res) => {
    try{
        const show = await Show.findById(req.params.id).populate('movie').populate('theatre');
        res.send({
            success : true,
            message : 'Show fetched successfully',
            data : show
        });
    }catch(err){
        res.status(400).send(err);
    }
}