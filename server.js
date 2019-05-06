// Dependencies
var express = require("express");





// Set a dynamic port and a local port at 6060
var PORT = process.env.PORT || 6060;

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("App server listening on: http://localhost:" + PORT);
  });
