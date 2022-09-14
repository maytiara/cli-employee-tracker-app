const { createConnect } = require("../connection/connection");

// these functions will be imported to the app.js (or main/server js)
async function addRole(title, department_id, salary) {

	const db = await createConnect(); // using promise wrapper
	const query = await `INSERT INTO roles (title,department_id, salary) VALUES (?,?,?);`;

	const values = [title, department_id, salary];

	await db.query(query, values, (err) => {
		if (err) {
			console.log("Successfully updated");
			if (err.code == "Please try again") {
				return false;
			}
		}

		return insertId;
	});
}

// this function provide the connection between mysql database
// query database
async function getRoles() {
	const db = await createConnect(); // using promise wrapper
	const [roles] = await db.query(
		"SELECT roles.id AS `ID`, roles.title AS `TITLE`, roles.salary AS `SALARY`, departments.name AS `DEPARTMENT`FROM roles, departments WHERE departments.id = roles.department_id"
	); // using promise wrapper

	return roles;
}

module.exports = {
	addRole,
	getRoles,
};

// const [addedRole] = await db.query('INSERT INTO `roles` (`title`, `salary`, `department_id`) SET (?)', title, salary, department_id);
