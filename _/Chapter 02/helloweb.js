var http = require("http");

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("<html>");
  response.write("<head><title>Node JS</title></head>");
  response.write("<body>Hello Web</body>");
  response.write("</html>");
  response.end();
}).listen(9999);
