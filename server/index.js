var express = require('express');
var db = require('./database.js');
var app = express();

app.use(express.static(__dirname + "/../client/build"));

app.get('/hi', function (req, res) {
  res.send('Hello World!');
})

app.get('/videolist', function(req, res) {
  db.getAll(function(data) {
    res.send(data);
  })
})

app.listen(8080, function () {
  console.log(__dirname + "/../client");
  console.log('Example app listening on port 8080!')
})