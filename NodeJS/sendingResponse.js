const http = require('http');
const server = http.createServer((req, res) => {
  const url = req.url;
  if(url === '/home'){
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<body><h1>Welcome to Home Page</h1></body>')
    res.write('</html>');
    res.end();
  }else if(url === '/about'){
    res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<body><h1>Welcome to about us page</h1></body>')
  res.write('</html>');
  res.end();
  }else if(url === '/node'){
    res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<body><h1>Welcome to node JS Project</h1></body>')
  res.write('</html>');
  res.end();
  }else{
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<body><h1>Please enter valid URL</h1></body>')
    res.write('</html>');
    res.end();
  }
});
server.listen(4000);