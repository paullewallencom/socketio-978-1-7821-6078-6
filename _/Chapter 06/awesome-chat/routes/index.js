
/*
 * GET home page.
 */
//exports.sockets = require('./sockets.js');

exports.index = function(req, res){
  res.render('index', { title: 'Express Chat' });
};

exports.chatroom = function(req, res){
  res.render('chatroom', { title: 'Express Chat' });
}

exports.rooms = function(req, res){
  res.render('rooms', { title: 'Express Chat' });
}