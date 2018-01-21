var express = require('express');
var socket = require('socket.io');

// APP set up

var app = express();
var server = app.listen(4000, function() {
    console.log("listening to request on port 4000")
});

// static file setup
app.use(express.static('public')); 

//socket setup
var io = socket(server);

io.on('connection', function(socket) {
    console.log('socket connection made', socket.id);

    socket.on('chat', function(data) {
        io.sockets.emit('chat', data);
    });

});