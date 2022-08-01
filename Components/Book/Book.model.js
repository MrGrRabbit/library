// search method
const DataTypes = require('sequelize');
const { sequelize } = require('../../Client/db.client');

const Books = sequelize.define(
    'books',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        namebook: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        nameauthorbook: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }
);

const createBook = async (book, author) => {
    const result = await Books.create({
        namebook: book,
        nameauthorbook: author
    });
    console.log(result);
    return result;
}


const findAllBooks = async () => {
    const result = await Books.findAll({ attributes: ['namebook'], raw: true });
    console.log(result);
    return result;
}

module.exports = {
    Books,
    findAllBooks,
    createBook
}
//Почему-то не получилось через init()
