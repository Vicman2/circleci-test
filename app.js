const http = require('http');

http.createServer(function (req, res) {
  res.write('Hello World! I just got editted'); 
  res.end(); 
}).listen(8080, '0.0.0.0'); 
