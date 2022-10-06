const express = require('express');
const app = express();
const bodyParser = require('body-parser');
//const multer = require('multer');
const upload = require('../Components/Book/middleware/Book.middleware');
const bookController = require('../Components/Book/Book.controller');

//const upload = multer({ dest: "uploads" });
// Когда будет функционал и страницы User - использовать express.Router()     

app.use(bodyParser.json());
app.get('/getBook', bookController.getBook);


app.get('/addBook', bookController.addBook);
app.post('/addBook', upload.single("bookPhoto"), bookController.addBookFunc);

app.get('/', (request, response) => {

    response.send(`
        <h2> Welcome to library </h2>
        <li> <a href='/getBook'>/getBook - получить все книги </a> </li> 
        <li>  <a href='/addBook'>/addBook - добавить книгу </a> </li> 
        <p> Добавление книги через POSTMAN </p>
        `);
});

app.use((request, response, next) => {
    response.status(404).send('<h1>Ошибка 404</h1>')
})

module.exports = app;
