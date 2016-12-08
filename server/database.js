var pgp = require('pg-promise')();
var connection = require('./dbcredentials.js');

var db = pgp(connection.connection);

var getAll = function(callback) {
    db.any("select * from gooville", [true])
        .then(function (data) {
            console.log(data);
            callback(data);
        })
        .catch(function (error) {
            console.log("error");
            callback("error when reading from db");
        });
}

exports.getAll = getAll;
