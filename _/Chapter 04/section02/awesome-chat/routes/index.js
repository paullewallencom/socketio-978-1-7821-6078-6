
/*
 * GET home page.
 */
//exports.sockets = require('./sockets.js');

exports.index = function(req, res){
  res.render('index', { title: 'Express Chat' });
};
