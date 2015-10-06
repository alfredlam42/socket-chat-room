var express = require('express'),
	app = express(),
	server = require('http').createServer(app),
	io = require('socket.io').listen(server);

sever.listen(3000);

app.get('/', function(req, res){
	res.sendfile(__direname + '/index.html');
});

