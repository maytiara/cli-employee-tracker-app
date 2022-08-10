// import and require dotenv
// specify the relative path
require('dotenv').config({ path: 'db/.env' });

// Import and require mysql2
const mysql = require('mysql2/promise');

function createConnect(){

  return mysql.createConnection({
    host: process.env.DB_HOST, // env 
    password: process.env.DB_PASSWORD, // env
    user: process.env.DB_USER, // env
    database: 'employee_tracker_cms',
  })
}

module.exports = {createConnect}; // exported it as an object {}
