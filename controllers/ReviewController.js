const ReviewService = require("../services/ReviewService")

async function getAllReviews(req, res, next) {
    const reviews = await ReviewService.getAllReviews();
    res.json(reviews);
}

async function getReviewById(req, res, next) {
    let id = req.params.id;
    try {
        let review = await ReviewService.getReviewById(id);
        res.status(200).json(review);
    } catch (err) {
        res.status(404).json("Your review is not available.")
    }
}

async function createReview(req, res, next) {
    try {
        let newReview = await ReviewService.createReview(req.body);
        res.status(201).json(newReview);
    } catch (err) {
        res.status(400).json("Invalid review data.")
    }
}

async function updateReview(req, res, next) {
    let id = req.params.id;
    try {
        let updatedReview = await ReviewService.updateReviewById(id, req.body);
        res.status(200).json(updatedReview);
    } catch (err) {
        res.status(400).json("Your review is not available.")
    }
}

async function deleteReview(req, res, next) {
    let id = req.params.id;
    try {
        let deletedReview = await ReviewService.deleteReviewById(id)
        res.status(200).json(deletedReview);
    } catch (err) {
        res.status(400).json("Your review is not available.")
    }
}

module.exports = {getAllReviews, getReviewById, createReview, updateReview, deleteReview}