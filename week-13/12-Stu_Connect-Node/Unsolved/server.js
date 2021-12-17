// import express and mySQL2 packages
const express = require("express");
const mysql = require("mysql2");

// set up port and express app
const PORT = process.env.PORT || 3001;
const app = express();

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "",
    database: "classlist_db",
  },
  console.log(`Connected to the classlist_db database.`)
);

// query db database
db.query("SELECT * FROM students", function (err, results) {
  console.log(results);
});

// set up failed response operation
app.use((req, res) => {
  res.status(404).end();
});

// connect port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
