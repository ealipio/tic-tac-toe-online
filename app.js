var app = require('express')(),
	http = require('http').Server(app),
	io = require('socket.io')(http),
   path = require('path');

app.get('/', function (req, res) {
	var ruta = path.join(__dirname, 'index.html');
  	res.sendFile(ruta);
});

io.sockets.on('connection', function (socket) {
  socket.on('turn played', function(data){
    socket.broadcast.emit('turn played', data);
  });
  socket.on('winner', function(data){
    socket.broadcast.emit('game over', { "winner": data });
  });
});

http.listen(8008, function(){
	console.log('Running on *:8008');
})