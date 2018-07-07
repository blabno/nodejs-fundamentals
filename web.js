const http = require('http');
const fs = require('fs');
const url = require('url');

// Create a server
const port = 8080;
http.createServer(function (request, response) {
  const parsedUrl = url.parse(request.url);
  const pathname = parsedUrl.pathname;

  console.log('Request for ' + pathname + ' received.');

  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write('<h1>Hello World!</h1>');
  response.write(`<pre>${JSON.stringify(parsedUrl, null, 2)}</pre>`);
  response.end();

}).listen(port);

// Console will print the message
console.log(`Server running at http://127.0.0.1:${port}/`);
