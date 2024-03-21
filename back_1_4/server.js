import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Route handler for serving the HTML form
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'form.html'));
});

app.post('/submit-form', (req, res) => {
  const { name, feedback } = req.body;
  console.log(`Name: ${name}, Feedback: ${feedback}`);
  res.send('Feedback received');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

