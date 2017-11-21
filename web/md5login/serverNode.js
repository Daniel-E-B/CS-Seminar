var fs=require('fs');

var express=require('express');
var http=require('http');
var connect = require('connect');

var app = http.createServer().use(connect.static(__dirname + './'));
app.listen(3000);
var server = http.createServer(app);
var io = require('socket.io').listen(server);
server.listen(app.get('port'));

  // wait for the event raised by the client
  /*server.on('userlist', function (data) {  
    console.log(data);
  });*/
