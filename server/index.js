var express = require('express')
var app = express()

app.use(express.static(__dirname + "/../client"));

app.get('/hi', function (req, res) {
  res.send('Hello World!')
})

app.use("*", express.static(__dirname + "/../client"));

app.listen(8080, function () {
  console.log(__dirname + "/../client");
  console.log('Example app listening on port 8080!')
})