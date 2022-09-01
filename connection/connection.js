// import and require dotenv
require('dotenv').config();  

// Import and require mysql2
const mysql = require('mysql2/promise');

// Create connection to database
function createConnect(){

  return mysql.createConnection({
    host: process.env.DB_HOST, // env 
    password: process.env.DB_PASSWORD, // env
    user: process.env.DB_USER, // env
    database: 'employee_tracker_cms',
  },
  ).catch(err => { // added some noise when there's a connection error
    console.log("Oh no! Error found");
  });

  
}

module.exports = { createConnect }; // exported as an object {}
