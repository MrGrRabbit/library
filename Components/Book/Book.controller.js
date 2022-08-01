const { findAllBooks, createBook } = require('./Book.model');

class Book {
    getBooks = (request, response) => {
        console.log('Book output...')
        if (request.path === '/output') {
            findAllBooks();
        }
        response.send(`
            <h2>Вывод книг</h2>
            <li>  <a href='/'>/ - главная </a> </li>
        `);
    }
    addBook = (request, response) => {
        console.log('Book add...');
        const book = request.query.book;
        const author = request.query.author;
        if (request.path === '/add') {
            createBook(book, author);
            console.log(request.path)
        }
        response.send(`
            <h2> Добавление книги </h2> ${book} - ${author}
            <li> <a href='/output'>/output - получить все книги </a> </li> 
        `);
    }
}
module.exports = new Book();