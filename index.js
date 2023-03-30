const inquirer = require('inquirer');
const connection = require('./config/connection');
const DB = require('./db');
require('console.table');

// init();

// function init() {
//     loadMainPrompts();
// }

// function loadMainPrompts() {
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
            ]
        }
    ]).then(res => {
        console.log("hello");
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
// }

// Building functions for each choice
// View all departments option
function viewDepartments() {
    const db = new DB(connection);
    console.log(db);
    db.findAllDepartments()
    .then(([rows]) => {
        let departments = rows;
        console.log('\n');
        console.table(departments);
    })
}
// View all roles option
function viewRoles() {
    db.findAllRoles()
    .then(([rows]) => {
        let roles = rows;
        console.log('\n');
        console.table; 
    })
}
// View all employees option
function viewEmployeesByDepartment() {
  db.findAllEmployees()
  .then(([rows]) => {
    let departments = rows;
    const departmentChoices = departments.map(({ id, name }) => ({
        name: name,
        value: id,
    }));
    prompt ([
        {
            type: 'list',
            name: 'departmentID',
            message: "Which department would you like to see employees for?",
            choices: departmentChoices
        }
    ])
    .then(res => db.findAllEmployeesByDept(res.deptID))
    .then(([rows]) => {
        let employees = rows;
        console.log('\n');
    console.table(employees);
    })
    .then(() => loadMainPrompts());
});
}

// Add department
function addDepartments() {
    db.createDepartment ()
    .then (([rows]) => {
        // TODO
        console.log('\n');
        console.table;
    }
    )
}
// function loadDeptOptions() {
//     prompt([
//         {
//             type: 'list',
//             name: 'choice',
//             message: 'What department would you like to add?',
//             input: 'name', 'string', 
//                 {
//                     name: "Quit",
//                     value: "QUIT"
//                 }
//             ]
//         }
//     ]).then(res => {
//         let choice = res.choice;

//             default:
//                 quit();

//         }
//     })
// }

// Add a role
function addRole() {

}
// function loadRole() {
//     prompt([
//         {
//             type: 'list',
//             name: 'choice',
//             message: 'What department role you like to add?',
//             input: 'name', 'string', 
//                 {
//                     name: "Quit",
//                     value: "QUIT"
//                 }
//             ]
//         }
//     ]).then(res => {
//         let choice = res.choice;

//             default:
//                 quit();

//         }
//     })
// }
// Add an employee
// function addEmployee() {

// }
// function loadDeptOptions() {
//     prompt([
//         {
//             type: 'list',
//             name: 'choice',
//             message: 'What department would you like to add?',
//             input: 'name', 'string', 
//                 {
//                     name: "Quit",
//                     value: "QUIT"
//                 }
//             ]
//         }
//     ]).then(res => {
//         let choice = res.choice;

//             default:
//                 quit();

//         }
//     })
// }

// Update an employee role
// function updateEmployeeRole() {

// }



// loadMainPrompts();