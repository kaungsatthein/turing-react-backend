const express = require('express');
const router = express.Router();
const movies = require('../controllers/MovieController')

router.get('/', movies.getAllMovies)
router.get("/:id", movies.getMovieById);
router.post("/", movies.createMovie);
router.put("/:id", movies.updateMovie);
router.delete("/:id", movies.deleteMovie);
router.get("/title/:title", movies.searchMovieByTitle);
router.get("/year/:year", movies.searchMovieByYear);

module.exports = router;