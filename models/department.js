const { createConnect } = require("../connection/connection"); // added automatically by VS C

// these functions will be imported to the app.js (or main/server js)
async function addDepart(name) {

  const db = await createConnect(); // using promise wrapper
  db.query('INSERT INTO `employee_tracker_cms`.`departments` (`name`) VALUES (?)', name);
  
  //("INSERT INTO 'table name' SET ?", name)
}

// this function provide the connection between mysql database
// query database
async function getDepart() {
  
  const db = await createConnect(); // using promise wrapper
  const [departments] = await db.query('SELECT departments.id AS `ID`, departments.name AS `DEPARTMENT NAME` FROM employee_tracker_cms.departments AS departments;'); // using promise wrapper
  
  return departments;
}

module.exports = {

  addDepart,
  getDepart, 
}