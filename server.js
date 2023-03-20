const inquirer = require("inquirer");
const mysql = require("mysql2");
require("console.table");


const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Configure the MySql connection properties
const db = mysql.createConnection(
  {
    host: "localhost",
    port: 3306,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DB_NAME,
})