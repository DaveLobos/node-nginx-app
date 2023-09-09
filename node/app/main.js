const http = require('http');

http.createServer((req, res) => {
  res.statusCode = 404;
  res.end("It works!");
})
  .listen(3000, "0.0.0.0");
