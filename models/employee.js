const { createConnect } = require("../connection/connection");

// create employees
async function addEmployees (first_name, last_name){

  //

}

// to get the data from the database
async function getEmployees (){

  const db = await createConnect();
  
  // Query to Join data from different table
  const [employees] = await db.query ('SELECT employees.id AS `ID`, employees.first_name AS `FIRST NAME`, employees.last_name AS `SURNAME`, roles.title AS `TITLE`, employees.manager_id AS `MANAGER` FROM employee_tracker_cms.employees AS employees LEFT JOIN employee_tracker_cms.roles AS roles ON employees.role_id = roles.id'); 

  return employees;

}

module.exports = {

  addEmployees,
  getEmployees,
 };