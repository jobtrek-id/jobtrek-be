const mysql = require("mysql2");

const db = mysql.createConnection({
   host: process.env.DB_HOST || "localhost",
   user: process.env.DB_USER || "root",
   database: process.env.DB_DATABASE,
});

module.exports = db;
