var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "burgers_db"
});

var xconnection = mysql.createConnection({
    host: 'lg7j30weuqckmw07.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    port: 3306,
    user: 'k52gernmnarmb4p9',
    password: 'r1qe0olus7kt5eg2',
    database: "burgers_db"
});

connection.connect(function(err) {
    if (err) {throw err;}
    console.log("Connected as ID + " + connection.threadId);
});

module.exports = connection;