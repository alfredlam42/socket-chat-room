io.sockets.on('connection', function(socket){
  socket.emit('message', {message: 'welcome to the chat', username: 'Server'});
  socket.on('send message', function(data){
    io.sockets.emit('new message', data);
  });
});