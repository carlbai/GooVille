var express = require('express');
var db = require('./database.js');
var app = express();
var path = require('path');

app.use(express.static(__dirname + "/../client/build"));

app.get('/hi', function (req, res) {
  res.send('Hello World!');
})

app.get('/videolist', function(req, res) {
  db.getAll(function(data) {
    res.send(data);
  })
})

app.get('/resetdatabase', function(req, res) {
  db.resetDB(function(data) {
    res.send(data);
  });
})

//catch all route
app.get('*', function(req, res) {
  res.sendFile(path.resolve(__dirname+'/../client/build/index.html'));
})

app.listen(8080, function () {
  console.log(__dirname + "/../client");
  console.log('Example app listening on port 8080!')
})