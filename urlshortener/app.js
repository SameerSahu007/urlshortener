const express = require('express')
const app = express()
const router = require('./routes/index')
const  sq = require('./config/db');
const port = 3000


app.use(express.urlencoded({ extended: true }))
app.use('/', router)

async function checkDatabaseConnection() {
    try {
        await sq.authenticate();
        console.log('Connection has been established successfully.');
        app.listen(port, () => {
            console.log("App started at port 3000")
        })
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

checkDatabaseConnection();
