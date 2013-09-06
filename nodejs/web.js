var express = require('express');

var io = require('socket.io')

io.configure(function () { 
  io.set("transports", ["xhr-polling"]); 
  io.set("polling duration", 10); 
});

var app = express();
var server = require('http').createServer(app)

app.use(express.static(__dirname + '/public'));

server.listen(process.env.PORT || 5000);
var serv_io = io.listen(server);

var map=[];
serv_io.sockets.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});
