// Start of building the application
// npm init > install required npm packages
// .gitignore > necessary files
// CREATE > table using mySQL -->done using ./db/schema.sql

const inquirer = require('inquirer');

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
    ]
  }
])

// User inputs: 
// VIEW ALL > departments, roles, employees, 
// ADD > department, a role, an employee, 
// UPDATE > an employee role

