var http = require("http");
var url = require("url");

function onRequest(request, response) {
  var pathname = url.parse(request.url).pathname;
  console.log("Request for " + request.method + pathname + " received.");
  if(typeof(routes[request.method + pathname])==='function'){
    routes[request.method + pathname](request, response);
  }else{
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.end("404 Not Found");
  }	
}

exports.start = function(){
  http.createServer(onRequest).listen(9999);
  console.log("Server has started.");
}

var routes = {};
exports.forRoute = function(method, path, handler){
  routes[method + path] = handler;
};  

