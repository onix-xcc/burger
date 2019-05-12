// Dependencies
var express = require("express");

// Import burger.js model
var burger = require("../models/burger.js");

// Shortcut variable
var cl = console.log;

// Create router var
var router = express.Router();

// ROUTES

// Displays all of the burgers on index page and terminal
router.get("/", function (req, res) {
    burger.selectAll(function(data) {
        var hbsObject = {
            burgers: data
        };
        cl(hbsObject);
        res.render("index", hbsObject);
    });
});

// Creates a new burger entry on the burgers_db table and logs it in terminal
router.post("/api/burgers", function (req, res) {
    burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function(result) {

		// Send back the ID of the new burger
        res.json({ id: result.insertId });
    });
});

// Changes the devoured value as true in the burgers_db table
router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    cl("condition", condition);

    burger.updateOne({ devoured: req.body.devoured }, condition, function(result) {
        if (result.changedRows === 0) {

            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// Removes burger entry from the burgers_db table
router.delete("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    cl("condition", condition);

    burger.deleteOne(condition, function(result) {
        if (result.changedRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;