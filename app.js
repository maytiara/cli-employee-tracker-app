// Start of building the application
// npm init > install required npm packages
// .gitignore > necessary files
// CREATE > table using mySQL -->done using ./db/schema.sql

const inquirer = require('inquirer');
const { getDepart } = require('./models/department');

inquirer.prompt ([
  {
    message: "Hello, welcome to secret database of this start-up company.",
    type: 'list',
    name: 'operation',
    choices: [
      "View All Departments",     
      "View All Roles",
      "View All Employees",
      "Add department",
      "Add Roles",
      "Add An Employee",
      "Update Employee Role",
      "exit",
    ]
  }
]).then(async (ans) => {

  switch(ans.choices){

    case "View All Departments":
      const departments = await getDepart();
      console.table(departments);
      break;

    // Once the user, select the exit, the node environment will stop the process.
    case "exit":
      process.exit(0);
  }
})

// User inputs: 
// VIEW ALL > departments, roles, employees, 
// ADD > department, a role, an employee, 
// UPDATE > an employee role

