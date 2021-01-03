var chatInfra = io.connect('/chat_infra'),
    chatCom = io.connect('/chat_com');

var roomName = decodeURI((RegExp("room" + '=' + '(.+?)(&|$)').exec(location.search) || [, null])[1]);

if (roomName) {
  chatInfra.on('name_set', function (data) {
    chatInfra.emit('join_room', {'name':roomName});

    chatInfra.on("user_entered", function (user) {
      $('#messages').append('<div class="systemMessage">' + user.name
          + ' has joined the room.' + '</div>');
    });

    chatInfra.on('message', function (message) {
      var message = JSON.parse(message);
      $('#messages').append('<div class="' + message.type + '">'
          + message.message + '</div>');
    });

    chatCom.on('message', function (message) {
      var message = JSON.parse(message);
      $('#messages').append('<div class="' + message.type + '"><span class="name">'
          + message.username + ":</span> "
          + message.message + '</div>');
    });

    $('#nameform').hide();
    $('#messages').append('<div class="systemMessage">Hello ' + data.name + '</div>');
    $('#send').click(function () {
      var data = {
        message:$('#message').val(),
        type:'userMessage'
      };
      chatCom.send(JSON.stringify(data));
      $('#message').val('');
    });
  });
}

$(function () {
  $('#setname').click(function () {
    chatInfra.emit("set_name", {name:$('#nickname').val()});
  });
});



