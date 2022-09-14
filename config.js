require('dotenv').config();

const configDB = {
    database: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    //timezone: '+00;00',
    dialect: process.env.DB_DIALECT,
    host: process.env.DB_HOST,
    define: {
        timestamps: false
    }
}

module.exports = configDB;