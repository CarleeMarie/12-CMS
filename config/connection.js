const mysql = require("mysql2");

require('dotenv').config();

const connection = mysql.createConnection({
    host: "localhost",
    database: process.env.DB_NAME,
    user: process.env.USER,
    password: process.env.PASSWORD, 
  });

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;