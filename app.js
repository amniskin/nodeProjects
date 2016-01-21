var port = 1234;
var http = require('http');

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello from the Node.js server!");
  response.end();
}).listen(port);
console.log('Server is listening on port ' + port);
