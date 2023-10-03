const { Sequelize } = require('sequelize');
require('dotenv').config();

const database = process.env.DATABASE;
const username = process.env.DATABASE_USERNAME;
const password = process.env.DATABASE_PASSWORD;
const database_host = process.env.DATABASE_HOST;


const sequelize = new Sequelize(database, username, password, {
    host: database_host,
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
});



module.exports = sequelize;