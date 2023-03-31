const { prompt } = require('inquirer');  
const db = require('./db'); 
const logo = require('asciiart-logo');
require('console.table');

init();

function init() {
    const displayLogo = logo({name: "Employee Management System"}).render();
    console.log(displayLogo);
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
                viewDepartments(); // finished
                break;
            case "VIEW_ROLES":
                viewRoles(); // finished
                break;
            case "VIEW_EMPLOYEES": // finished
                viewEmployees();
                break;
            case "ADD_DEPARTMENT": // finished
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
// Add a department option
function addDepartments() {
    prompt([
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

// Add role



// TODO: Add a role
function addRole() {
    db.findAllDepartments()
        .then(([rows]) => {
            let departments = rows
        })

    prompt([
        {
            name: "name",
            message: "What role do you want to create?",
        },
        {
            name: "salary",
            message: "What is the salary of this role?",
        },
        {
            type: "list",
            name: "department_id",
            message: "What department does this role belong to?",
            choices: deptOptions
        }
       
        




    ])}

        
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
})

}

// Exit the application
function quit() {
    console.log("Goodbye!");
    process.exit();
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