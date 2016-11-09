var app=require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

/*io.on('connection', function(socket){

  socket.on('crud_boc', function(msg){
    //io.emit('crud_boc', msg);
    io.emit('crud_boc', 'refresh_data');
    
    
  });
});

*/

io.sockets.on('connection', function (socket) {
  socket.on('crud_boc', function(data) {
      // you can try one of these three options

      // this is used to send to all connecting sockets
      io.sockets.emit('crud_boc', { id: data });
  });
});

 

/*var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'
*/
var server_port = 3000
var server_ip_address = 'testjs.ormag.net'
 
http.listen(server_port, server_ip_address, function () {
  console.log( "Listening on " + server_ip_address + ", server_port " + server_port )
});

