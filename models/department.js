const { createConnect } = require("../connection/connection"); // added automatically by VS C

// these functions will be imported to the app.js (or main/server js)
async function addDepart(name) {

  const db = await createConnect(); // using promise wrapper
  const [updatedDept] = await db.query('INSERT INTO `departments` (`name`) VALUES (?)', name);
  
  return updatedDept;
}

// this function provide the connection between mysql database
// query database
async function getDepart() {
  
  const db = await createConnect(); // using promise wrapper
  const [departments] = await db.query('SELECT departments.id AS `ID`, departments.name AS `DEPARTMENT NAME` FROM departments AS departments;'); // using promise wrapper
  
  return departments;
}

module.exports = {

  addDepart,
  getDepart, 
}