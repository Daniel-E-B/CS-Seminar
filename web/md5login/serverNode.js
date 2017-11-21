var fs=require('fs');

var express=require('express');
var http=require('http');

var app = express();
app.set('port', process.env.PORT || 3000);
var server = http.createServer(app);
var io = require('socket.io').listen(server);
server.listen(app.get('port'));

  // wait for the event raised by the client
  socket.on('userlist', function (data) {  
    console.log(data);
  });
