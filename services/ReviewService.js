const Review = require("../models/Review");
const mongoose = require("mongoose");

async function getAllReviews() {
    let reviews = await Review.find().populate("movie");
    return reviews;
}

async function getReviewById(id) {
    let review = await Review.findById(id).populate("movie");
    return review;
}

async function createReview(review) {
    let newReview = await new Review({
        movie: new mongoose.Types.ObjectId(review.movie),
        rating: review.rating,
        review: review.review
    });
    await newReview.save();
    return newReview.populate("movie");
}

async function updateReviewById(id, review) {
    let existingReview = await Review.findById(id);
    if (!existingReview) {
        throw new Error("Review not found");
    } else {
        review.movie = new mongoose.Types.ObjectId(existingReview.movie)
        let updatedReview = await Review.findByIdAndUpdate(id, review, {new: true});
        return updatedReview.populate("movie");
    }
}

async function deleteReviewById(id) {
    let existingReview = await Review.findById(id);
    if (!existingReview) {
        throw new Error("Review not found");
    } else {
        let deletedReview = await Review.findByIdAndDelete(id);
        return deletedReview;
    }

}

module.exports = {
    getAllReviews, getReviewById, createReview, updateReviewById, deleteReviewById
}