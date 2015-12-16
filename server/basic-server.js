var http = require("http");
var messages = require('./request-handler');
var utils = require('./utils');
var url = require('url');

var port = 3000;
var ip = "127.0.0.1";

var router = {
  '/classes/messages': messages.requestHandler
  // ...
};

var server = http.createServer( function(req, res){
  console.log("Serving request type " + req.method + " for url " + req.url);

  var route = router[url.parse(req.url).pathname];
  if (route) {
    route(req, res);
  } else {
    utils.sendResponse(res, '', 404);
  }
});

console.log("Listening on http://" + ip + ":" + port);
server.listen(port, ip);