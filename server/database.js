var pgp = require('pg-promise')();
var connection = require('./dbcredentials.js');

var db = pgp(connection.connection);

var getAll = function(callback) {
    db.any("select * from gooville")
        .then(function (data) {
            callback(data);
        })
        .catch(function (error) {
            console.log("error: " + error);
            callback("error when reading from db");
        });
}

var resetDB = function(callback) {
    db.tx(function (t) {
        var cs = new pgp.helpers.ColumnSet(['videoid', 'creator', 'title'], {table:'gooville'});
        var values = [
            {videoid:"7z54Ybs0DZg", creator:"test1", title:"test1"},
            {videoid:"7z54Ybs0DZg", creator:"test2", title:"test2"},
            {videoid:"pmCi7tqrne4", creator:"test3", title:"test3"},
            {videoid:"EFig-bHcBLE", creator:"test4", title:"test4"},
            {videoid:"UtoPxEFeDrE", creator:"test5", title:"test5"},
            {videoid:"Klq8yYV5cLE", creator:"test6", title:"test6"},
            {videoid:"tRf4S_ArF_A", creator:"test7", title:"test7"}
        ];
        var insertQuery = pgp.helpers.insert(values, cs);

        // `t` and `this` here are the same;
        var queries = [
            this.none('drop table if exists gooville;'),
            this.none('create table gooville(id serial primary key, videoid text, creator varchar(50), title varchar(100))'),
            this.none(insertQuery)
        ];
        return this.batch(queries);
    })
        .then(function () {
            callback("successful");
        })
        .catch(function (error) {
            console.log("reset table unsuccessful, error: " + error);
            callback("not successful");
        });
}

var insertItem = function(item, callback) {
    db.none('insert into gooville(videoid) values($1)', item)
        .then(function() {
            callback('successful');
        })
        .catch(function(error) {
            console.log('error: ' + error);
            callback('not successful');
        })
}

exports.getAll = getAll;
exports.resetDB = resetDB;
exports.insertItem = insertItem;
