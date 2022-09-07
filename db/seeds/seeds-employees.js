const { faker } = require('@faker-js/faker'); //npm package
const { addEmployee } = require('../../models/employee');

// For loop function generate fake data name
async function seedEmployees(num = 16){
  for (let index = 0; index < num; index++) {

    await addEmployee({
      first_name: faker.name.firstName(),
      last_name:faker.name.lastName(),
    });
  }
  return addEmployee;
}


// this exports to 
module.exports = { seedEmployees };

// Optional ONLY! Hard coded the data in mySQL 