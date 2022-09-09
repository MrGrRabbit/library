const express = require('express');
const app = express();

const bookController = require('../Components/Book/Book.controller');
    // Когда будет функционал и страницы User - использовать express.Router()     
app.get('/getBook', bookController.getBook);
app.get('/addBook', bookController.addBook);

app.get('/', (request, response) => {
    // В будущем страницы из view
    response.send(`
        <h2> Welcome to library </h2>
        <li> <a href='/getBook'>/getBook - получить все книги </a> </li> 
        <li>  <a href='/addBook'>/addBook - добавить книгу </a> </li> 
        <p>Формат добавления book = name</p>
        <p>Формат добавления author = name</p>
        ?book=Рассказы&author=Чехов
        `);
});

app.use((request, response, next) =>{
    response.status(404).send('<h1>Ошибка 404</h1>')
})

module.exports = app;
