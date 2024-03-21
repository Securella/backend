import express from 'express';
import { appendFile, promises as fs } from 'fs';

const app = express();
const PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Handle POST Request with form data validation
app.post('/submit', async (req, res) => {
    const { name, feedback } = req.body;

    // Simple validation
    if (!name || !feedback) {
        return res.status(400).send('Both name and feedback are required.');
    }

    const submission = JSON.stringify({ name, feedback }) + '\n';

    try {
        // Solution 1: Callback Method
        appendFile('submissions.json', submission, (err) => {
            if (err) {
                res.status(500).send('Error saving submission');
            } else {
                res.send('Submission saved successfully');
            }
        });

        // Solution 2: Promise Method
        // fs.appendFile('submissions.json', submission)
        //     .then(() => res.send('Submission saved successfully'))
        //     .catch(() => res.status(500).send('Error saving submission'));

        // Solution 3: Async/Await Method
        // await fs.appendFile('submissions.json', submission);
        // res.send('Submission saved successfully');
    } catch (error) {
        res.status(500).send('Error saving submission');
    }
});

// Read submissions and display on a separate page
app.get('/submissions', async (req, res) => {
    try {
        const data = await fs.readFile('submissions.json', 'utf-8');
        const submissions = data.split('\n').filter(line => line).map(JSON.parse);
        res.json(submissions);
    } catch (error) {
        res.status(500).send('Error reading submissions.');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
