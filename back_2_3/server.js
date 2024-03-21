import 'dotenv/config';
import express from 'express';
import { Pool } from 'pg';

const app = express();
const port = 8080;

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));
// Middleware to serve static files
app.use(express.static('public'));

// Database connection setup
const pool = new Pool({
    user: process.env.POSTGRES_USER,
    host: 'localhost',
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    port: 5432,
});

// Route to handle form submission
app.post('/submit', async (req, res) => {
    const { name, feedback } = req.body;
    try {
        const queryText = 'INSERT INTO submission (name, feedback) VALUES ($1, $2)';
        await pool.query(queryText, [name, feedback]);
        res.send('Submission saved successfully');
    } catch (err) {
        console.error('Error executing query', err.stack);
        res.status(500).send('An error occurred while saving the submission');
    }
});

// Start the server
app.listen(port, () => console.log(`Server running on port ${port}`));
