// Import MySQL connection.
var connection = require("./connection.js");

// Shortcut variables to save me some typing
var cl = console.log;

// Helper function for SQL syntax.
// Let's say we want to pass 3 values into the mySQL query.
// In order to write the query, we need 3 question marks.
// The above helper function loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string.
// ["?", "?", "?"].toString() => "?,?,?";
function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    var arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
      var value = ob[key];

      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
        // e.g. {sleepy: true} => ["sleepy=true"]
        arr.push(key + "=" + value);
      }
    }
  
    // translate array of strings to a single comma-separated string
    return arr.toString();
}
  

// Create functions that displays or makes changes to the burgers_db
var orm = {

    // Display burger data on burger_db 
    selectAll: function (table, cb) {
      var queryString = "SELECT * FROM " + table + ";";
  
      connection.query(queryString, function (err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    
    // Adds a burger entry to the burgers_db table
    insertOne: function (table, cols, vals, cb) {
      var queryString = "INSERT INTO " + table;
      queryString += " (";
      queryString += cols.toString();
      queryString += ") ";
      queryString += "VALUES (";
      queryString += printQuestionMarks(vals.length);
      queryString += ") ";
  
      cl(queryString);
  
      connection.query(queryString, vals, function (err, result) {
        if (err) {
          throw err
        }
        cb(result);
      });
    },
    
    // Sets the burger as devoured in the burgers_db table
    updateOne: function (table, objColVals, condition, cb) {
      var queryString = "UPDATE " + table;
      queryString += " SET ";
      queryString += objToSql(objColVals);
      queryString += " WHERE ";
      queryString += condition;
  
      cl(queryString);
  
      connection.query(queryString, function (err, result) {
        if (err) {
          throw err
        }
        cb(result);
      });
    },

    // Deletes the burger from the burgers_db table
    deleteOne: function (table, condition, cb) {
      var queryString = "DELETE FROM " + table;
      queryString += " WHERE ";
      queryString += condition;
  
      cl(queryString);
  
      connection.query(queryString, function (err, result) {
        if (err) {
          throw err
        }
        cb(result);
      });
    }
};

// Export the ORM
module.exports = orm;