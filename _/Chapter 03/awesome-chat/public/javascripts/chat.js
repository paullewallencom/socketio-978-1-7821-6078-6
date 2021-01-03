var socket = io.connect('/');

socket.on('message', function (data) {
  data = JSON.parse(data);
  $('#messages').append('<div class="'+data.type+'">' + data.message + '</div>');
});

$(function(){
  $('#send').click(function(){
    var data = {
      message: $('#message').val(),
      type:'userMessage'
    };
    socket.send(JSON.stringify(data));
    $('#message').val('');
  });
});


