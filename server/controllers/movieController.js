const Movie = require('../models/movieModel');

const addMovie = async(req,res) => {
    try{
        const {name, genre, duration, releaseDate, language} = req.body;
        const movie = new Movie({
            name,
            genre,
            duration,
            releaseDate,
            language
        });
        await movie.save();
        res.status(201).send('Movie added successfully');
    } catch(err){
        res.status(400).send(err);
    }
}


const getAllMovies = async(req,res) => {
    try{
        const movies = await Movie.find();
        res.send({
            success : true,
            message : 'Movies fetched successfully',
            data : movies
        });
    }catch(err){
        res.status(400).send(err);
    }
}


const updateMovie = async(req,res) => {
    try{
        await Movie.findByIdAndUpdate(req.params.id, req.body);
        res.send({
            success : true,
            message : 'Movie updated successfully'
        });
    }
    catch(err){
        res.status(400).send({
            success : false,
            message : 'Movie not found'
        });
    }
}


const deleteMovie = async(req,res) =>{
    try{
        await Movie.findByIdAndDelete(req.params.id);
        res.send({
            success : true,
            message : 'Movie deleted successfully'
        });
    }
    catch(err){
        res.status(400).send({
            success : false,
            message : 'Movie not found'
        });
    }
}

const getMovieById = async(req,res) => {
    try{
        const movie = await Movie.findById(req.params.id);
        res.send({
            success : true,
            message : 'Movie fetched successfully',
            data : movie
        });
    }catch(err){
        res.status(400).send(err);
    }
}

