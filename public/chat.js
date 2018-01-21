//make connection for front end
var socket = io.connect("http://localhost:4000");

var message = document.getElementById('message');
var handle = document.getElementById('handle');
var btn = document.getElementById('send');
var output = document.getElementById('output');


// Emit Evnet

btn.addEventListener('click', function() {
    socket.emit('chat', {
        message : message.value,
        handle: handle.value
    });
});

// listen for event
socket.on('chat', function(data) {
    output.innerHTML += '<p><strong>'+data.handle+' : </strong> '+data.message+'</p> ';
});