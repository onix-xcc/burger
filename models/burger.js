// Imports ORM.js
var orm = require("../config/orm.js");

// Create functions
var burger = {
    
    // Display burger data on burger_db 
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
          cb(res);
        });
    },
    
    // Adds a burger entry to the burgers_db table
    insertOne: function (cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function (res) {
            cb(res);
        });
    },
    
    // Sets the burger as devoured in the burgers_db table
    updateOne: function (objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function (res) {
            cb(res);
        });
    },

    // Deletes the burger from the burgers_db table
    deleteOne: function (condition, cb) {
        orm.deleteOne("burgers", condition, function (res) {
            cb(res);
        });
    }
}


// Exports burger.js file out
module.exports = burger;