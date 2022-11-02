//-----MODULE INITIATION-----//
const mysql = require('mysql');
const dotenv = require('dotenv');

dotenv.config();

//-----GLOBALS-----//
let instance = null;


//-----CONNECTION-----//
const connection = mysql.createConnection({
    host: process.env.HOST,
    port: process.env.DB_PORT,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

connection.connect((err) => {
    if (err) {
        console.log(err.message);
    }
    console.log('db ' + connection.state);
});

//-----CLASS-----//
// This class will be used to hold the functions for manipulating the data
class dbService {
    /*
        Grabs the instance of the class. Without it, multiple instances would be made.
        The return statment checks if instance is not null. If it is, creates a new instance.
    */
    static getInstance() {
        return instance ? instance : new dbService();
    }

    //-----GET QUERIES-----//


    //-----CREATE QUERIES-----//


    //-----EDIT QUERIES-----//


    //-----DELETE QUERIES-----//


}

//-----MODULE EXPORT-----//
module.exports = dbService;