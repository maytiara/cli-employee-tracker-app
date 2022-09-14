const { addDepart } = require ("../models/department");

const { createConnect } = require("../connection/connection");

jest.mock('../connection/connection') //for the dummy connection

test ("addDepart() should return an update department", async () => {

  // arrange
  const test_data= 'test data' //variable for the 'string data'
  let query = jest.fn(() => Promise.resolve([test_data]));

  createConnect.mockImplementation(() => ({
    query // 
  }))

  // act
  const result = await addDepart(test_data); //assigned variable for the addDepart passing a 'test_data'
  
  // assert
  expect(query).toHaveBeenCalled()
  expect(result).toBe(test_data)
});
