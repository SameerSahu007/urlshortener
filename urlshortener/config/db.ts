import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const database: string | undefined = process.env.DATABASE;
const username: string | undefined = process.env.DATABASE_USERNAME;
const password: string | undefined = process.env.DATABASE_PASSWORD;
const database_host: string | undefined = process.env.DATABASE_HOST;

if (!database || !username || !password || !database_host) {
    throw new Error('Missing required environment variables for database configuration.');
}

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

export default sequelize;