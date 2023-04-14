const mysql = require("mysql2");


require('dotenv').config();
console.log(process.env);


const connection = mysql.createConnection({
    host: "localhost",
    database: process.env.DB_NAME,
    password:process.env.PASSWORD, 
    user: process.env.USER 
  });

connection.connect(function(err) {
  console.log("AAAAAAA")
    if (err) throw err;
    console.log("connected")
});

module.exports = connection;