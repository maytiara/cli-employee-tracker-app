// Start of building the application
// npm init > install required npm packages
// .gitignore > necessary files
// CREATE > table using mySQL -->done using ./db/schema.sql

const Table = require('easy-table'); // npm package
const inquirer = require('inquirer'); // npm package
const { getDepart } = require('./models/department'); // added automatically by VS C
const { addDepart } = require('./models/department'); // added for addDepart object value
const { getEmployees } = require('./models/employee'); // added automatically by VS C
const { getRoles, addRole } = require('./models/roles'); // added automatically by VS C

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
        "Add Role",
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
    },
    {
      // Prompt for Add Role
      message: "Please enter the position/role name?",
      type: 'input',
      name:'role_name',
      when: (ans) => ans.operation === 'Add Role',
    }

  ]).then(async (ans) => { //-- this retrieve the answer from the list of choices
    
    // switch statement that matches the value of each "case" clause
    switch(ans.operation){
  
      case "View All Departments":
        const departments = await getDepart();
        console.log(Table.print(departments)); //render using easy-table npm
        break;
      
      case "View All Roles":
        const roles = await getRoles();
        console.log(Table.print(roles)); //render using easy-table npm
        break;

      case "View All Employees":
        const employees = await getEmployees();
        console.log(Table.print(employees)); //render using easy-table npm
        break;

      case "Add Department":
        await addDepart(ans.department_name);
        console.log(`Successfully added to our database`);
        break;

      case "Add Role":
        await addRole(ans.role_name);
        break;

      case "Add An Employee":
        await addEmployees(ans.employee_name);
        console.log(`Successfully added to our database`);
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

