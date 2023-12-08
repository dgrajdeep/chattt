$(function () {
    const socket = io();

    // Set username
    const username = prompt('Enter your username:');
    socket.emit('set username', username);

    // Handle form submission
    $('form').submit(function () {
        socket.emit('chat message', $('#m').val());
        $('#m').val('');
        return false;
    });

    // Display messages
    socket.on('chat message', function (msg) {
        $('#messages').append($('<li>').text(msg));
    });
});
