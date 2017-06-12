var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");
var mysql = require('mysql');
var path = require('path');
var methodOverride = require('method-override');
var moment = require('moment');
var htmlRoutes = require('./routes/html-routes.js');
var apiRoutes = require('./routes/api-routes.js');

var app = express();
var PORT = (process.env.PORT || 3000);

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

htmlRoutes(app);
apiRoutes(app);

app.listen(PORT, function() {
    console.log('Listening to PORT ' + PORT);
});
