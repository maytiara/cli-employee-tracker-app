// import and require dotenv
// plus, using a try catch error if anything goes wrong the first line will be undefined
try {
  require('dotenv').config();
} catch(err){
  console.log(err);
}

// Import and require mysql2
const mysql = require('mysql2/promise');

function db (){

  mysql.createConnection({
    host: process.env.DB_HOST, // env 
    password: process.env.DB_PASSWORD, // env
    user: process.env.DB_USER, // env
    database: 'employee_tracker_cms',
  })
}