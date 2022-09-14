const { Books } = require('./Book.model');

class BookRepo {
    createBook = async (book, author) => {
        const result = await Books.create({
            namebook: book,
            nameauthorbook: author
        });
        console.log(result);
        return result;
    }

    findAll = async () => {
        const result = await Books.findAll({ attributes: ['namebook'], raw: true });
        console.log('Get All Books...')
        console.log(result);
        return result;
    }
}


module.exports = new BookRepo();
