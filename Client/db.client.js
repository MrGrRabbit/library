const Sequelize = require('sequelize');
const configDB = require('../config');

const sequelize = new Sequelize(configDB);

// экспорт объекта инстанс сиквалайз

module.exports = {
    sequelize
}