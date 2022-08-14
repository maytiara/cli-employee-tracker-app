const { createConnect } = require("../db/connection");

// these functions will be imported to the app.js (or main/server js)
function addRole() {

}

// this function provide the connection between mysql database
// query database
async function getRoles() {
  
  const db = await createConnect(); // using promise wrapper
  const [roles] = await db.query('SELECT * FROM roles'); // using promise wrapper
  
  return roles;
}

module.exports = {

  addRole,
  getRoles,
}