import express from 'express';
import { dataStore, reviewLinks } from './dataStore.js'; // Importing reviewLinks from dataStore.js

const router = express.Router();

// GET all reviews for a specific book
router.get('/:bookId', (req, res) => {
    const bookId = parseInt(req.params.bookId);
    const reviews = dataStore.reviews.filter(review => review.bookId === bookId);
    // Enhancing the response with HATEOAS links for each review
    const reviewsWithLinks = reviews.map(review => ({
        ...review,
        _links: reviewLinks(review) // Generating HATEOAS links for each review
    }));
    res.json(reviewsWithLinks);
});

// POST a new review for a specific book
router.post('/:bookId', (req, res) => {
    const bookId = parseInt(req.params.bookId);
    const newReview = {
        id: dataStore.reviews.length + 1,
        bookId: bookId,
        reviewText: req.body.reviewText,
        rating: req.body.rating
    };
    dataStore.reviews.push(newReview);
    res.status(201).json(newReview);
});

// DELETE a review by ID
router.delete('/:id', (req, res) => {
    const reviewIndex = dataStore.reviews.findIndex(r => r.id === parseInt(req.params.id));
    if (reviewIndex > -1) {
        dataStore.reviews.splice(reviewIndex, 1);
        res.status(204).send();
    } else {
        res.status(404).send('Review not found');
    }
});

export default router;
