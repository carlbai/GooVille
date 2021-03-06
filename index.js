var express = require('express');
var db = require('./database.js');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var request = require('superagent');

app.use(express.static(__dirname + "/client/build"));
app.use(bodyParser.json()); // for parsing application/json

var apiKey = 'AIzaSyAQjQPuiTyrWILTJB0aDEHEe2okHFbl0t0';

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

app.post('/insertitem', function(req, res) {
  db.insertItem(req.body.videoid, function(data) {
    res.send(data);
  })
})

app.post('/getVideo', function(req, res) {
  request
    .get('https://www.googleapis.com/youtube/v3/videos')
    .query({
      part: 'snippet,id,statistics',
      id: req.body.videoid,
      key: apiKey
    })
    .then(function(data) {
      res.send(data.body.items[0])
    });
})

//catch all route
app.get('*', function(req, res) {
  res.sendFile(path.resolve(__dirname+'/client/build/index.html'));
})

app.listen(8080, function () {
  console.log(__dirname + "/client");
  console.log('Example app listening on port 8080!')
})