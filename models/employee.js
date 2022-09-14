const { createConnect } = require("../connection/connection");

// create employees
async function addEmployees (first_name, last_name){

  //("INSERT INTO 'table name' SET ?", name)
  // INSERT INTO `employee_tracker_cms`.`employees` (`id`, `first_name`, `last_name`, `role_id`, `manager_id`) VALUES ('18', 'Sheila', 'Marquez', '17', '16');
}

// to get the data from the database
async function getEmployees (){

  const db = await createConnect();
  
  // Query to Join data from different table
  const [employees] = await db.query ('SELECT employees.id AS `ID`, employees.first_name AS `FIRST NAME`, employees.last_name AS `SURNAME`, roles.title AS `TITLE`, manager.first_name AS `MANAGER` FROM employees LEFT JOIN roles ON employees.role_id = roles.id JOIN employees as manager on employees.manager_id = manager.id;'); // in JOIN (we deceived the MySQL by passing a dummy field name and get the manager(value) from the same table

  return employees;

}

module.exports = {

  addEmployees,
  getEmployees,
 };