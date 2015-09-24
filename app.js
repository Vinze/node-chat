var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
	io = require('socket.io').listen(server);

server.listen(1337);

// Configure the application
app.configure(function() {
	app.use(express.static(__dirname + '/public'));
});

app.get('/', function (req, res) {
	res.sendfile('./public/index.html');
});