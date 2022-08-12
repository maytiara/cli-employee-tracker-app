const { createConnect } = require("../db/connection"); // added automatically by VS C

// these functions will be imported to the app.js (or main/server js)
function addDepart() {

}

// this function provide the connection between mysql database
// query database
async function getDepart() {
  
  const db = await createConnect(); // using promise wrapper
  const [departments] = await db.query('SELECT * FROM departments'); // using promise wrapper
  
  return departments;
}

module.exports = {

  addDepart,
  getDepart, 
}