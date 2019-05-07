
var express = require("express");
var app = express();

var PORT = process.env.PORT || 8080;

require("./routing/apiRoutes.js")(app);
require("./routing/htmlRoutes.js")(app);


// starting the server
app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});
