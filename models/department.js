const { createConnect } = require("../db/connection"); // added automatically by VS C

// these functions will be imported to the app.js (or main/server js)
function addDepart() {

}

async function getDepart() {
  
  const db = await createConnect();
  db.query(sql)
}

module.exports = {

  addDepart,
  getDepart, 
}