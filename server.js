// Dependencies
var express = require("express");

// Set a dynamic port and a local port at 6060
var PORT = process.env.PORT || 6060;

var burgerApp= express();


// Serve static content for the app from the "public" directory in the application directory.
burgerApp.use(express.static("public"));

// Parse application body as JSON
burgerApp.use(express.urlencoded({ extended: true }));
burgerApp.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

burgerApp.engine("handlebars", exphbs({ defaultLayout: "main" }));
burgerApp.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller");

burgerApp.use(routes);

// Start our server so that it can begin listening to client requests.
burgerApp.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("App server listening on: http://localhost:" + PORT);
  });
