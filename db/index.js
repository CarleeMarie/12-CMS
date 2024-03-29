const connection = require('../config/connection');

class DB {
  constructor(connection) {
    this.connection = connection;
  }

  findAllDepartments(department) {
    return this.connection.promise().query(
      "SELECT department.id, department.name FROM department",
      [department]
    );
  }

  findAllRoles() {
    return this.connection.promise().query(
      "SELECT role.id, role.title, role.salary, role.dept_id FROM role LEFT JOIN department ON role.dept_id = department.id"     
    );
  }

  findAllEmployees(employee) {
    return this.connection.promise().query(
      "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.dept_id = department.id LEFT JOIN employee manager ON manager.id = employee.manager_id;",
      [employee]
    );
  }

  findAllManagers(employee) {
    return this.connection.promise().query(
      "SELECT id, first_nam, last_name FROM employee WHERE id !=?",
      employee 
    );
  }

  // create a new employee
  createEmployee(employee) {
    return this.connection.promise().query("INSERT INTO employee SET ?", employee
    );  
  }

    
    
  // remove an employee with given id
  removeEmployee(employee) {
    return this.connection.promise().query(
      "DELETE FROM employee WHERE id = ?",
      employee
    );
  }

  updateEmployeeRole(employee, roleId) {
    return this.connection.promise().query(
      "UPDATE employee SET role_id = ? WHERE id = ?",
      [roleId, employee]
    );
  }

  updateEmployeeManager(employee, managerId) {
    return this.connection.promise().query(
      "UPDATE employee SET manager_id = ? WHERE id = ?",
      [managerId, employee]
    );
  }



  // create a new employee
  createEmployee(employee) {
    return this.connection.promise().query("INSERT INTO employee SET ?", employee);
  }

  

  // create a new department
  createDepartment(department) {
    return this.connection.promise().query("INSERT INTO department SET ?", department);    
  }
    
  // create a new role
  createRole(role) {
    return this.connection.promise().query("INSERT INTO role SET ?",
    role);
  }
}

module.exports = new DB(connection);

