const { Books } = require('./Book.model');

class BookRepo {
    createBook = async (book, author, photo) => {
        const result = await Books.create({
            namebook: book,
            nameauthorbook: author,
            idphotobook: photo
        });
        console.log(result);
        return result;
    }

    findAll = async () => {
        const result = await Books.findAll({ attributes: ['id', 'namebook'], raw: true });
        console.log('Get All Books...')
        console.log(result);
        return result;
    }
}


module.exports = new BookRepo();


/* 
* переместить логику добавление фотографии 
* где хранить фотографии
*   
*/