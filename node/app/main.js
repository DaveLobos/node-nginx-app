const http = require('http');

const page = `
<html>
<head>
<title>It works!</title>
<link rel="stylesheet" type="text/css" href="/css/style.css" />
</head>
<body>It works!</body>
</html>
`;

http.createServer((req, res) => {
  res.statusCode = 404;
  res.end(page);
})
  .listen(3000, "0.0.0.0");
