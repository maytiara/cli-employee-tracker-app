const {faker} = require('@faker-js/faker');



async function seedEmployees(num = 17){
  for (let index = 0; index < num; index++) {

    await getEmployees(faker.name.findName)
  }
}