const http = require('http');

const html = `
<html>
<head>
  <title>Hola Mundo</title>
  <link rel="stylesheet" type="text/css" href="/static/styles.css" />
</head>
<body>Hola Mundo</body>
</html>
`;

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(html);
})
  .listen(3000, "0.0.0.0");
