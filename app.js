// Start of building the application
// npm init > install required npm packages
// .gitignore > necessary files
// CREATE > table using mySQL -->done using ./db/schema.sql

const inquirer = require('inquirer'); // npm package
const { getDepart } = require('./models/department'); // added automatically by VS C
const { addDepart } = require('./models/department'); // added for addDepart object value
const { getRoles } = require('./models/roles'); // added automatically by VS C

// this is a recursive function, having a base case to make sure the function will be terminated. **Not advisable for big/critical application.
function main() {
  return inquirer.prompt ([
    {
      message: "Hello, welcome to secret database of this start-up company.",
      type: 'list',
      name: 'operation',
      choices: [
        "View All Departments",     
        "View All Roles",
        "View All Employees",
        "Add Department",
        "Add Roles",
        "Add An Employee",
        "Update Employee Role",
        "exit",
      ]
    },
    {
      // Prompt for Add Department
      message: "Please enter the department name?",
      type: 'input',
      name:'department_name',
      when: (ans) => ans.operation === 'Add Department',
    }
  ]).then(async (ans) => { //-- this retrieve the answer from the list of choices
    
    // switch statement that matches the value of each "case" clause
    switch(ans.operation){
  
      case "View All Departments":
        const departments = await getDepart();
        console.table(departments);
        break;
      
      case "View All Roles":
        const roles = await getRoles();
        console.table(roles);
        break;

      case "Add Department":
        await addDepart(ans.department_name);
        break;
  
      // Once the user, select the exit, node environment will stop the process.
      case "exit":
        process.exit(0);
        break;
    }
    await main();
  })
}

main();


// User inputs: 
// VIEW ALL > departments, roles, employees, 
// ADD > department, a role, an employee, 
// UPDATE > an employee role

