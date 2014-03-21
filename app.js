var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server);

server.listen(1337);

app.use(express.static('public'));

app.get('/', function(req, res) {
	res.sendfile('public/index.html');
});

var messages = [];

io.sockets.on('connection', function(socket) {
	socket.emit('history', messages);
	socket.on('message', function (message) {
		messages.push(message);
		if (messages.length > 20) {
			messages = messages.slice(messages.length - 20, 20);
		}
		io.sockets.emit('message', message);
	});
});