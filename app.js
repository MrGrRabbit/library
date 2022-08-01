const { sequelize } = require('./Client/db.client');
const app = require('./Router/index.router');
const {Books, findAllBooks, createBook} = require('./Components/Book/Book.model');
//const {findAllBooks} = require('./Books/FindBook.service');
const PORT = 3000;

//const app = express();


// checking the connection to the database
async function assertDatabaseConnection() {
    console.log('Checking the connection to the database...')
    try {
        await sequelize.authenticate();
        console.log('Connection successful.')
    } catch (error) {
        console.log('Ошибка: ' + error);
    }
}

async function init() {
    await assertDatabaseConnection();
    app.listen(PORT, () => {
        console.log('port: ' + PORT);
    });
}

init();



