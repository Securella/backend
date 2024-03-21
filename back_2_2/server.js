import express from 'express';
import sqlite3 from 'sqlite3';

const app = express();
const port = 8080;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Database Initialization
const db = new sqlite3.Database('./mydb.sqlite3', (err) => {
    if (err) {
        console.error('Error opening database', err.message);
    } else {
        console.log('Connected to the SQLite database.');
        initializeDb();
    }
});

function initializeDb() {
    const initSql = `
        CREATE TABLE IF NOT EXISTS submission (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            feedback TEXT NOT NULL
        )
    `;
    
    db.exec(initSql, (err) => {
        if (err) {
            console.error('Error initializing database', err.message);
        } else {
            console.log('Database initialized.');
        }
    });
}

// POST Route to handle form submissions
app.post('/submit', (req, res) => {
    const { name, feedback } = req.body;

    // Validate form data
    if (!name || !feedback) {
        return res.status(400).send('Both name and feedback are required.');
    }

    db.run('INSERT INTO submission (name, feedback) VALUES (?, ?)', [name, feedback], (err) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).send('An error occurred while saving the submission');
        }
        res.send('Submission saved successfully');
    });
});

// GET Route to fetch submissions
app.get('/submissions', (req, res) => {
    db.all('SELECT * FROM submission', [], (err, rows) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).send('An error occurred while fetching submissions');
        }
        res.json(rows);
    });
});

// Start server
app.listen(port, () => console.log(`Server running on port ${port}`));

