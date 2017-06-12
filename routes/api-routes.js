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
    app.post('/api/add', function(req, res) {
        var queryString = 'INSERT INTO burgers (burger_name) VALUES (?)';
        connection.query(queryString, req.body.burger_name, function(err, result) {
            if (err) {throw err;}            
            res.json(burgers);
        });
        //console.log(req.body);        
    });
    app.post('/api/update', function(req, res) {
        console.log(req.body.burg);
        var queryString = 'UPDATE burgers SET devoured=true WHERE burger_name=?';
        connection.query(queryString, req.body.burg, function(err, result) {
            if (err) {throw err;}
        });
    });
};