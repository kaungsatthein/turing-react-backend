const Movie = require("../models/Movie")

async function getAllMovies() {
    const movies = await Movie.find();
    return movies;
}

async function getMovieById(id) {
    let movie = await Movie.findById(id);
    return movie;
}

async function createMovie(movie) {
    let newMovie = await new Movie(movie);
    return newMovie.save();
}

async function updateMovieById(id, movie) {
    let existingMovie = await Movie.findById(id);
    if (!existingMovie) {
        throw new Error("Movie not found");
    } else {
        let updatedMovie = await Movie.findByIdAndUpdate(id, movie, {new: true});
        return updatedMovie;
    }
}

async function deleteMovieById(id) {
    let existingMovie = await Movie.findById(id);
    if (!existingMovie) {
        throw new Error("Movie not found");
    } else {
        let deletedMovie = await Movie.findByIdAndDelete(id);
        return deletedMovie;
    }

}


module.exports = {
    getAllMovies, getMovieById, createMovie, updateMovieById, deleteMovieById
}