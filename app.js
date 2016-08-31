var express = require('express'),
   path = require('path');

var app = express();
//var io = require('socket.io').listen(app);

app.get('/', function (req, res) {
	var ruta = path.join(__dirname, 'index.html');
  	res.sendFile(ruta);
});

app.listen(8008);
/*io.sockets.on('connection', function (socket) {
  socket.on('turn played', function(data){
    socket.broadcast.emit('turn played', data);
  });
  socket.on('winner', function(data){
    socket.broadcast.emit('game over', { "winner": data });
  });
});*/