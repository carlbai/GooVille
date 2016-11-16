var express = require('express');
var app = express();

app.use(express.static(__dirname + "/../client/build"));

app.get('/hi', function (req, res) {
  res.send('Hello World!');
})

app.get('/videolist', function(req, res) {

  var dillonvideolist = [
    {"id": "id1","url": "https://www.youtube.com/watch?v=7z54Ybs0DZg", "videoID": "7z54Ybs0DZg"}, 
    {"id": "id2","url": "https://www.youtube.com/watch?v=pmCi7tqrne4", "videoID": "pmCi7tqrne4"}, 
    {"id": "id3","url": "https://www.youtube.com/watch?v=EFig-bHcBLE", "videoID": "EFig-bHcBLE"}, 
    {"id": "id4","url": "https://www.youtube.com/watch?v=UtoPxEFeDrE", "videoID": "UtoPxEFeDrE"}, 
    {"id": "id5","url": "https://www.youtube.com/watch?v=Klq8yYV5cLE", "videoID": "Klq8yYV5cLE"}, 
    {"id": "id6","url": "https://www.youtube.com/watch?v=tRf4S_ArF_A", "videoID": "tRf4S_ArF_A"}
  ];

  res.send(dillonvideolist);
})

app.listen(8080, function () {
  console.log(__dirname + "/../client");
  console.log('Example app listening on port 8080!')
})