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
        },
        idphotobook: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }
);

module.exports = {
    Books
}
//Почему-то не получилось через init()
