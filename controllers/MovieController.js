const MovieService = require('../services/MovieService')

async function getAllMovies(req, res, next) {
    try {
        const movies = await MovieService.getAllMovies()
        res.json(movies)
    } catch (err) {
        res.status(500).json({})
    }
}

async function getMovieById(req, res, next) {
    let id = req.params.id;
    try {
        let movie = await MovieService.getMovieById(id);
        res.status(200).json(movie);
    } catch (err) {
        res.status(404).json("Your movie is not available.")
    }
}

async function createMovie(req, res, next) {
    try {
        let newMovie = await MovieService.createMovie(req.body);
        res.status(201).json(newMovie);
    } catch (err) {
        res.status(400).json("Invalid movie data.")
    }
}

async function updateMovie(req, res, next) {
    let id = req.params.id;
    try {
        let updatedMovie = await MovieService.updatevieById(id, req.body);
        res.status(200).json(updatedMovie);
    } catch (err) {
        res.status(400).json("Your movie is not available.")
    }
}

async function deleteMovie(req, res, next) {
    let id = req.params.id;
    try {
        let deletedMovie = await MovieService.deleteMovieById(id)
        res.status(200).json(deletedMovie);
    } catch (err) {
        res.status(400).json("Your movie is not available.")
    }
}

module.exports = {
    getAllMovies, getMovieById, createMovie, updateMovie, deleteMovie
}