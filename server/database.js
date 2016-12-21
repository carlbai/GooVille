var pgp = require('pg-promise')();
var connection = require('./dbcredentials.js');

var db = pgp(connection.connection);

var getAll = function(callback) {
    db.any("select * from gooville")
        .then(function (data) {
            console.log(data);
            callback(data);
        })
        .catch(function (error) {
            console.log("error");
            callback("error when reading from db");
        });
}

const dillonvideolist = [
    "7z54Ybs0DZg",
    "pmCi7tqrne4",
    "EFig-bHcBLE",
    "UtoPxEFeDrE",
    "Klq8yYV5cLE",
    "tRf4S_ArF_A"
]

var resetDB = function(callback) {
    db.tx(function (t) {
        // `t` and `this` here are the same;
        var queries = [
            this.none('drop table if exists gooville;'),
            this.none('create table gooville(id serial primary key, videoid text)'),
            this.none('insert into gooville(videoid) values($1),($2),($3),($4),($5),($6)', dillonvideolist)
        ];
        return this.batch(queries);
    })
        .then(function () {
            console.log("reset database was successful");
            callback("successful");
        })
        .catch(function (error) {
            console.log("reset table unsuccessful, error: ");
            console.log(error); // printing the error;
            callback("not successful");
        });
}

exports.getAll = getAll;
exports.resetDB = resetDB;
