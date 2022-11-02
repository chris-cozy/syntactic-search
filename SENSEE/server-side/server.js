//-----MODULE INITIATION & SETUP-----//
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const dbService = require('./dbService');

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//-----CREATE ROUTES-----//
app.post('/addData', (request, response) => {

});

//-----GET ROUTES-----//
app.get('/getData', (request, response) => {
    console.log('Test Handshake');
});

// UPDATE
app.patch('/updateData', (request, response) => {


});


// DELETE
app.delete('/delete', (request, response) => {

});


//-----SERVER STARTUP-----//
app.listen(process.env.PORT, () => {
    console.log("The app is online.");
});