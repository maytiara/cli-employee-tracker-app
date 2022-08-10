const { createConnect } = require("../db/connection"); // added automatically by VS C

// these functions will be imported to the app.js (or main/server js)
function addDepart() {

}

// this function provide the connection between mysql database
async function getDepart() {
  
  const db = await createConnect(); // used await instead using the .then syntax
  const [departments] = await db.query('SELECT * FROM DEPARTMENTS'); // used await instead using the .then syntax

  return departments;
}

module.exports = {

  addDepart,
  getDepart, 
}