import express from 'express'
const app = express()
import router from './routes/index'
import cors  from 'cors';
import sq from './config/db'
import cookieParser from 'cookie-parser';
const PORT = process.env.PORT || 8000

require('dotenv').config();
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use('/', router)


async function checkDatabaseConnection() {
    try {
        await sq.authenticate();
        console.log('Connection has been established successfully.');
        app.listen(PORT, () => {
            console.log("App started at port 8000")
        })
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

checkDatabaseConnection();
