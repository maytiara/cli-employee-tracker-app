const { createConnect } = require("../db/connection");

// these functions will be imported to the app.js (or main/server js)
function addRole() {

}

// this function provide the connection between mysql database
// query database
async function getRoles() {
  
  const db = await createConnect(); // using promise wrapper
  const [roles] = await db.query(
    'SELECT roles.id, roles.title, roles.salary, departments.name AS `department`FROM employee_tracker_cms.roles AS roles, employee_tracker_cms.departments AS departments WHERE departments.id = roles.department_id'
    ); // using promise wrapper
  
  return roles;
}

module.exports = {

  addRole,
  getRoles,
}