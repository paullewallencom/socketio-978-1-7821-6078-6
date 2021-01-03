var server = require("./server.js");
var path = require('path');
var fs = require('fs');

var root = __dirname;

var serveStatic = function(response, file){
  var fileToServe = path.join(root, file);
  var stream = fs.createReadStream(fileToServe); 
  stream.pipe(response); 
}

server.forRoute("GET", "/start", function(request, response){
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello");
    response.end();
});

server.forRoute("GET", "/finish", function(request, response){
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Goodbye");
    response.end();
});

server.forRoute("POST", "/echo", function(request, response){
    
    var incoming = "";

    request.on('data', function(chunk) {
        incoming += chunk.toString();
    });

    request.on('end', function(){
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write(incoming);
        response.end();
    });
});

server.forRoute("GET", "/echo", function(request, response){
    serveStatic(response, "echo.html");
});

server.start();
