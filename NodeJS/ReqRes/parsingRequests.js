const http = require('http');
const { someText } = require('./routes.js');

const routes = require('./routes.js');

console.log(someText);
// const server = http.createServer(routes);
const server = http.createServer(routes.handler)

server.listen(4000)