// Dependencies
var mysql = require("mysql");

// Shortcut variables to save me some typing
var cl = console.log;


var dbConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "burgers_db"
});

dbConnection.connect(function(err) {
    if (err) {
        cl("Connection error: " + err.stack);
        return;
    }
    cl("Connected as id " + dbConnection.threadId);
});

module.exports = dbConnection;