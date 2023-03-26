const connection = require('./connection');
let  = require(schema.sql);

class DB {
    constructor(connection) {
        this.connection = connection;
    }
  findAllEmployees() {
    return this.connection.promise().query(
        "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS ........"

    );
  }
  findAllDepartments() {
    return this.connection.promise().query(
        "SELECT id, first_name, last_name FROM employee WHERE id !=?",
        employeeID
    );
  }

  // create a new department
  createDepartment(department) {
    return this.connection.promise().query("INSERT INTO department SET ?", department);
    
  }
  // create a new role
  createEmployee(role) {
    return this.connection.promise().query("INSERT INTO role SET ?", role);
    
  }
  // create a new employee
  createEmployee(employee) {
    return this.connection.promise().query("INSERT INTO employee SET ?", employee);
    
  }
}