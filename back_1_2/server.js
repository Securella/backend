import express from 'express';
const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Start the server and listen on port 3000
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

