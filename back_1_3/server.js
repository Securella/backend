import express from 'express';
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { title: 'Home', message: 'Welcome to EJS templating!' });
});
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});