const inquirer = require("inquirer");
const mysql = require("mysql2");
require("console.table");

//Configure the MySql connection properties
const dbConnection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root"
})