const { addDepart } = require ("../models/department");

test ("addDepart() should return new department", async () => {

  const data = await addDepart();
  expect(data).toBe("Department Name");
})