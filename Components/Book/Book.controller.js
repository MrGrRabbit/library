const { findAllBooks, createBook } = require('./Book.model');

exports.addBook = (request, response) => {
    createBook(request.query.book, request.query.author);
    response.send(`
    <h3>Добавление книги</h3>
    <li>  <a href='/'>/ - главная </a> </li>
    `);
}

exports.getBook = (request, response) => {
    findAllBooks();
    response.send(`
        <h3>Получение книг</h3>
        <li>  <a href='/'>/ - главная </a> </li>
    `, );
}
