// Dependencies
var mysql = require("mysql");

// Shortcut variables to save me some typing
var cl = console.log;

// Connection credentials to MySQL database. 
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",

    // Don't forget to put in the password later to test app out!
    password: "",

    database: "burgers_db"
});

// Function that connects Node to MySQL db
connection.connect(function(err) {
    if (err) {
        cl("Connection error: " + err.stack);
        return;
    }
    cl("Connected as id " + connection.threadId);
});

// Exports Node to MySQL connection
module.exports = connection;