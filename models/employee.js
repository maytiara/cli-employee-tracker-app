const { createConnect } = require("../connection/connection");

// create employees
async function addEmployee (first_name, last_name){

  const db = await createConnect();
  
  await db.query ('INSERT INTO `employee_tracker_cms`.`employees` (`first_name`, `last_name`) VALUES (?,?)', first_name, last_name);

}

// to get the data from the database
async function getEmployees (){

  const db = await createConnect();
  
  const [employees] = await db.query ('SELECT * FROM employee_tracker_cms.employees'); // Select all 

  return employees;

}

module.exports = { getEmployees };