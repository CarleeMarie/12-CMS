const inquirer= require('inquirer');  
const logo = require('asciiart-logo');
require('console.table');
const db = require('./db'); 



function init() {
const displayLogo = logo({name: "Employee Management System"}).render();
console.log(displayLogo);
  loadMainPrompts();
}

function loadMainPrompts() {
  inquirer.prompt([
  {
    type: 'list',
    name: 'choice',
    message: 'What would you like to do?',
    choices: [
      {
        name: "View All Departments",
        value: "VIEW_DEPARTMENTS"
      },
      {
        name: "View All Roles",
        value: "VIEW_ROLES"
      },
      {
        name: "View All Employees",
        value: "VIEW_EMPLOYEES"
      },
      {
        name: "Add a Department",
        value: "ADD_DEPARTMENT"
      },
      {
        name: "Add a Role",
        value: "ADD_ROLE"
      },
      {
        name: "Add an Employee",
        value: "ADD_EMPLOYEE"
      },
      {
        name: "Update Employee Role",
        value: "UPDATE_EMPLOYEE_ROLE"
      },
      {
        name: "Quit",
        value: "QUIT"
      }
    ],
  }
]).then(res => {
  let choice = res.choice;
  switch (choice) {
  case "VIEW_DEPARTMENTS":
    viewDepartments(); 
    break;
  case "VIEW_ROLES":
    viewRoles(); 
    break;
  case "VIEW_EMPLOYEES": 
    viewEmployees();
    break;
  case "ADD_DEPARTMENT": 
    addDepartments();
    break;
  case "ADD_ROLE":
    addRole();
    break;
  case "ADD_EMPLOYEE":
    addEmployee();
    break;
  case "UPDATE_EMPLOYEE_ROLE":
    updateEmployeeRole();
    break;
  default:
    quit();
  }
 })
}

// Building functions for each choice
// View all departments option
function viewDepartments() {
  db.findAllDepartments()
    .then(([rows]) => {
      let department = rows;
      console.log('\n');
      console.table(department);
      loadMainPrompts();
    })
}

// View all roles option
function viewRoles() {
  console.log("here");
  db.findAllRoles()
    .then(([rows]) => {
      let role = rows;
      console.log('\n');
      console.table(role);
      loadMainPrompts(); 
    })
}

// View all employees option
function viewEmployees() {
  db.findAllEmployees()
    .then(([rows]) => {
      let employee = rows;
      console.log('\n');
      console.table(employee);
      loadMainPrompts();
    })
}

// Add a department option
function addDepartments() {
  inquirer.prompt([
    {
      name: "name",
      message: "What department do you want to create?",
    }
  ])
    .then(res => {
      let name = res;
      db.createDepartment(name)
      .then(() => console.log(`${name} was created.`))
      .then(() => loadMainPrompts());
    })
}

// Add a role    
function addRole() {
  db.findAllDepartments().then(([rows]) => {
    let department = rows;
    console.log("\n");
    console.table(department);
    let listDepartment = department.map((dept) => {
      return {
        name: dept.name,
        value: dept.id,
      };
    });
    console.log(listDepartment);

    inquirer
      .prompt([
        {
          name: "title",
          message: "What role do you want to create?",
        },
        {
          name: "salary",
          message: "What is the salary of this role?",
        },
        {
          type: "list",
          name: "dept_id",
          message: "What department does this role belong to?",
          choices: listDepartment,
        },
      ])
      .then((res) => {
        let name = res;
        console.log(name);
        db.createRole(name)
          .then(() => console.log(`${name} was created.`))
          .then(() => loadMainPrompts());
      });
  });
}
       
// Add an employee
function addEmployee() {
  db.findAllRoles().then(([rows]) => {
    let role = rows;
    console.log("\n");
    console.table(role);
    let listRole = role.map((role) => {
      return {
        name: role.title,
        value: role.id,
      };
    });
  
  
  
    // function assignManager() {
    // db.findAllManagers().then(([rows]) => {
    //   let manager_id = rows;
    //   console.log("\n");
    //   console.table(manager_id);
    //   let listManager = role.map((employee.roleId) => {
    //     return {
    //       name: department.id,
    //       value: department.id,
    //     };
    //   });
    // }
    // console.log(listRole);
  
  inquirer.prompt ([
    {
      name: "first_name",
      message: "What is the first name of the new employee?",
    },
    {
      name: "last_name",
      message: "What is the last name of the new employee?",
    },
    {
      type: "list",
      name: "role",
      message: "What role should be assigned to the employee?",
      choices: listRole,
    },
    {
      type: "list",
      name: "manager",
      message: "Who is the manager of the employee?",
      choices: listManager,
    },
  ])
  .then(res => {
    let name = res;
      console.log(name);
      db.addEmployee(name)
      .then(() => console.log(`${name} has been added as an employee.`))
      .then(() => loadMainPrompts());
    });
});
}
  


// Update an employee role
function updateEmployeeRole() {
  db.findAllEmployees()
  .then(([rows]) => {
    let employee = rows;
    const employeeChoices = employee.map(({ id, first_name, last_name }) =>
      ({
        name: `${first_name} ${last_name}`,
        value: id
      }));
   
  inquirer.prompt([
      {
        type: 'list',
        name: 'employee',
        message: "Which employee's role would you like to update?",
        choices: employeeChoices
      }
  ])
  .then(res => {
    let employeeId = res.employeeId;
    db.findAllRoles()
      .then(([rows]) => {
        let role = rows;
        const roleChoices = role.map(({ id, title }) => ({
          name: title,
          value: id
      }));
    inquirer.prompt ([
      {
        type: "list",
        name: "roleId",
        message: "Which role would you like to assign the selected employee?",
        choices: roleChoices
      }
    ])
      .then(res => db.updateEmployeeRole(employeeId, res.roleId))
      .then(() => console.log("Updated employee's role."))
      .then(() => loadMainPrompts());
      });
    })
      .then(res => db.updateEmployeeRole(res))
      .then(() => console.log("Updated employee's role."))
      .then(() => loadMainPrompts());
  })
}


init();


// Exit the application
function quit() {
  console.log("Goodbye!");
  process.exit();
}