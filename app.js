var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

server.listen(3000);

app.use(express.static(__dirname + '/public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.engine('jade', require('jade').__express);

app.get('/', function(req, res){
	res.render('index');
});

io.sockets.on('connection', function(socket){
  socket.emit('new message', 'welcome to the chat');
  socket.on('send message', function(data){
    io.sockets.emit('new message', data);
  });
});

console.log('listening on port 3000');


