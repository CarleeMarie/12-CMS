const { prompt } = require('inquirer');  //const inquirer = require('inquirer');
// const connection = require('./config/connection');
const db = require('./db');  //const DB = require('./db/src');
const logo = require('asciiart-logo');
require('console.table');

init();

function init() {
    loadMainPrompts();
}

function loadMainPrompts() {
   prompt([
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
 }

// Building functions for each choice
// View all departments option
function viewDepartments() {
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
function viewEmployees() {
  db.findAllEmployees()
    .then(([rows]) => {
        let employees = rows;
        console.log('\n');
        console.table(employees);
    })
}
// TODO: Add a department option
function addDepartments() {
    db.createDepartment ()
    .then (([rows]) => {
           
            console.log('\n');
            console.table;
        }
        )
    }
    .then(() => loadMainPrompts());
});
}



function loadDeptOptions() {
    prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'What department would you like to add?',
            input: 'name', 'string', 
                {
                    name: "Quit",
                    value: "QUIT"
                }
            ]
        }
    ]).then(res => {
        let choice = res.choice;

            default:
                quit();

        }
    })
}

// TODO: Add a role
function addRole() {

}
function loadRole() {
    prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'What department role you like to add?',
            input: 'name', 'string', 
                {
                    name: "Quit",
                    value: "QUIT"
                }
            ]
        }
    ]).then(res => {
        let choice = res.choice;

            default:
                quit();

        }
    })
}
// TODO: Add an employee
function addEmployee() {

}
function loadDeptOptions() {
    prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'What department would you like to add?',
            input: 'name', 'string', 
                {
                    name: "Quit",
                    value: "QUIT"
                }
            ]
        }
    ]).then(res => {
        let choice = res.choice;

            default:
                quit();

        }
    })
}

// Update an employee role
function updateEmployeeRole() {
    db.findAllEmployees()
    .then(([rows]) => {
        let employees = rows;
        const employeeChoices = employees.map(({ id, first_name, last_name }) =>
        ({
            name: `${first_name} ${last_name}`,
            value: id
        }));
        const roleChoices = roles.map(({ id, title }) => ({
            name: title,
            value: id
        }));
        prompt([
            {
                type: 'list',
                name: 'employeeId',
                message: "Which employee's role would you like to update?",
                choices: employeeChoices
            }
        ])
        .then(res => {
            let employeeId = res.employeeId;
            db.findAllRoles()
            .then(([rows]) => {
                let roles = rows;
                const roleChoices = roles.map(({ id, title }) => ({
                    name: title,
                    value: id
                }));
                prompt9[
                    {
                        type: "list",
                        name: "roleId",
                        message: "Which role would you like to assign the selected employee?",
                        choices: roleChoices
                    }
                ])
                .then(res => db.updateEmployeeRole(empoyeeId, res.roleId))
                .then(() => console.log("Updated employee's role."))
                .then(() => loadMainPrompts());
            });
        })
}
        ])
        .then(res => db.updateEmployeeRole(res))
        .then(() => console.log("Updated employee's role."))
        .then(() => loadMainPrompts());
    });

}



