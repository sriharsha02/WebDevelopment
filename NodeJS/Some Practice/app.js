const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.write("Sri Harsha");
  res.end();
});
server.listen(4000);