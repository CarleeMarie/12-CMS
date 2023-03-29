const mysql = require("mysql2");

require('dotenv').config();

const connection = mysql.createConnection({
    host: "localhost",
    database: process.env.DB_NAME,
    user: process.env.USER,
    password: process.env.PASSWORD, 
  },
  console.log('Connected to the company_db database.'));

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;