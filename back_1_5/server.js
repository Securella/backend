import express from 'express';
import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

let feedbackData = []; // This array will store feedback entries

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/submit-feedback', (req, res) => {
    res.sendFile(__dirname + '/public/feedback-form.html');
});

app.post('/process-feedback', (req, res) => {
    const { name, email, feedback } = req.body;
    feedbackData.push({ name, email, feedback });
    res.redirect('/view-feedback');
});

app.get('/view-feedback', (req, res) => {
    res.render('feedback-list', { feedbackData });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});