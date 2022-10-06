const { request } = require('../../Router/index.router');
const BookRepo = require('./Book.repo');
const { uuidPhoto } = require('./middleware/uuidGeneration');
// нейминги...
class BookController {
    addBook = (request, response) => {
        console.log('Add book page');
        response.send(`
            <h3>Добавление книги</h3>
            <p>Форма добавления книги </p>
            <li>  <a href='/'>/ - главная </a> </li>
        `);
    }
    addBookFunc = (request, response) => {
        console.log('start post request...');
        const book = request.body.bookName;
        const author = request.body.authorName;
        const bookPhoto = uuidPhoto;
        console.log("ДАННЫЕ КНИГИ: " + book + " ДАННЫЕ АВТОРА: " + author);
        BookRepo.createBook(book, author, bookPhoto);
        console.log("book photo: " + bookPhoto);

        response.status(200).send(bookPhoto);
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
