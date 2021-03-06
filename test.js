var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

//app.get('/', function(req, res){
//  res.sendfile('index.htm');
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

  socket.on('crud_aro', function(msg){
    io.emit('crud_aro', 'refresh_data');
  });

  socket.on('nodejs_status', function(msg){
    io.emit('nodejs_status', '1');
  });

  socket.on('metar', function(msg){
    console.log("msg");
    io.emit('metar', 'METAR:'+msg);

  });

});




http.listen(3000, function(){
  console.log('listening on *:3000');
});
