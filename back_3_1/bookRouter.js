import express from 'express';
import { dataStore } from './dataStore.js';

const router = express.Router();

// GET all books
router.get('/', (req, res) => {
    res.json(dataStore.books);
});

// GET a single book by ID
router.get('/:id', (req, res) => {
    const book = dataStore.books.find(b => b.id === parseInt(req.params.id));
    if (book) {
        res.json(book);
    } else {
        res.status(404).send('Book not found');
    }
});

// POST a new book
router.post('/', (req, res) => {
    const newBook = {
        id: dataStore.books.length + 1,
        title: req.body.title,
        author: req.body.author,
        genre: req.body.genre
    };
    dataStore.books.push(newBook);
    res.status(201).json(newBook);
});

// PUT (update) a book by ID
router.put('/:id', (req, res) => {
    const book = dataStore.books.find(b => b.id === parseInt(req.params.id));
    if (book) {
        book.title = req.body.title || book.title;
        book.author = req.body.author || book.author;
        book.genre = req.body.genre || book.genre;
        res.json(book);
    } else {
        res.status(404).send('Book not found');
    }
});

// DELETE a book by ID
router.delete('/:id', (req, res) => {
    const bookIndex = dataStore.books.findIndex(b => b.id === parseInt(req.params.id));
    if (bookIndex > -1) {
        dataStore.books.splice(bookIndex, 1);
        res.status(204).send();
    } else {
        res.status(404).send('Book not found');
    }
});

export default router;
