const BookRepo = require('./Book.repo');

// нейминги...
class BookController {
    addBook = (request, response) => {
        BookRepo.createBook(request.query.book, request.query.author);
        response.send(`
            <h3>Добавление книги</h3>
            <li>  <a href='/'>/ - главная </a> </li>
        `);
    }

    getBook = (request, response) => {
        BookRepo.findAll();
        response.send(`
            <h3>Получение книг</h3>
            <li>  <a href='/'>/ - главная </a> </li>
        `,);
    }
}

module.exports = new BookController(); 
