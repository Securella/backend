import express from 'express';
import bookRouter from './bookRouter.js';
import reviewRouter from './reviewRouter.js';

const app = express();
app.use(express.json());

// Mount the routers
app.use('/books', bookRouter);
app.use('/reviews', reviewRouter);

// Define a route handler for the root endpoint
app.get('/', (req, res) => {
    res.send('Welcome to the Book Review API');
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
