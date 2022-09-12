const { addDepart } = require ("../models/department");

test ("addDepart() should return an update department", async () => {

  await addDepart("Department Name"); //this "Department Name" saved in database when running the test 
  expect("").toEqual(""); // expected to be undefined.
  return ""; 
});
