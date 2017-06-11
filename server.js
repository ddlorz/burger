var express = require("express");
var bodyParser = require("body-parser");
var mysql = require('mysql');
var exphbs = require("express-handlebars");

var app = express();
var PORT = (process.env.PORT || 3000);

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var burgers = {
        burger: 'cheesburger'
    };

app.get('/', function(req, res) {
    res.render('index', burgers)
});

app.listen(PORT, function() {
    console.log('Listening to PORT ' + PORT);
});
