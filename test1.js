var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

//app.get('/', function(req, res){
//  res.sendfile('../index.php');
//});

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

  socket.on('crud_boc', function(msg){
    console.log('status: ' + msg);
  });

  socket.on('crud_boc', function(msg){
    io.emit('crud_boc', 'refresh_data');
  });
});


http.listen(3010, function(){
  console.log('listening on *:3010');
});
