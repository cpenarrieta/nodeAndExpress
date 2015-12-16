var express = require('express');
var bodyParser = require('body-parser');
var messages = require('./messages');
var app = express();

app.use(bodyParser.json());

app.use(function(req, res, next) {
  console.log("Serving request type " + req.method + " for url " + req.url);
  res.header("access-control-allow-origin", "*");
  res.header("access-control-allow-methods","GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "content-type, accept");
  res.header("access-control-max-age","10");
  res.header('Content-Type', 'application/json');
  next();
});

app.get('/classes/messages', function (req, res) {
  res.status(200).json(messages);
});

app.post('/classes/messages', function (req, res) {
  var reqObj = req.body;
  messages.addMessage(reqObj.username, reqObj.roomName, reqObj.message);
  res.status(201).json({objectId: messages.objectId});
});

app.options('/classes/messages', function (req, res) {
  res.status(200).json('ok');
});

var server = app.listen(process.env.PORT || 5000, function(){
  var host = server.address().address;
  var port = server.address().port;

  console.log('listening at http://%s:%s', host, port, 'env var is',(process.env.TIMES || 5));
});