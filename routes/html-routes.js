var path = require('path');
var connection = require('../configuration/connection.js');

var burgers = [
    {
        burger: 'cheeseburger'
    },
    {
        burger: 'mushroom'
    }
];

module.exports = function(app) {
    app.get('/', function(req, res) {
        var queryString = 'SELECT burger_name FROM burgers WHERE devoured=false';
        connection.query(queryString, function(err, result) {
            var unDevoured = [];    
            for (var i = 0; i < result.length; i++) {
                unDevoured.push({burger_name: result[i].burger_name});                
            }
            var queryString2 = 'SELECT burger_name FROM burgers WHERE devoured=true';
            
            connection.query(queryString2, function(err, result) {
                var Devoured = [];    
                for (var i = 0; i < result.length; i++) {
                    Devoured.push({burger_name: result[i].burger_name});                
                }
                
                res.render('index', {burg: unDevoured, eaten_burg: Devoured});
            });
        });
    });
};