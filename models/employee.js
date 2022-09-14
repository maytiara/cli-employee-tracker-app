const { createConnect } = require("../connection/connection");

// create employees
async function addEmployees (first_name, last_name, role_id){

  const db = await createConnect(); // using promise wrapper

  const query = await `INSERT INTO employees (first_name, last_name, role_id) VALUES (?,?,?);`

  const values = [first_name, last_name, role_id];

  const [insertEmployee] = await db.query(query, values, (err) => {
    if (err) {
			console.log("Successfully updated");
			if (err.code == "Please try again") {
				return false;
			}
		}

		return insertEmployee;
  });
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