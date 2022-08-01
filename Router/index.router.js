const express = require('express');
const app = express();

const Book = require('../Components/Book/Book.controller');

app.get('/', (request, response) => {
    response.send(`
        <h2> Welcome to library </h2>
        <li> <a href='/output'>/output - получить все книги </a> </li> 
        <li>  <a href='/add'>/add - добавить книгу </a> </li> 
        <p>Формат добавления book = name</p>
        <p>Формат добавления author = name</p>
        ?book=Рассказы&author=Чехов
        `);
});

app.get('/output', Book.getBooks);

app.get('/add', Book.addBook);

module.exports = app;

/*
* настроить вывод всех книг
* как передать результат функции в ответ роутера
* что должен делать контроллер? подготавливать к ответу файлы 
* в контроллер запихать данные для добавления книги
*
*/