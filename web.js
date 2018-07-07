const http = require('http');
const fs = require('fs');
const url = require('url');
const util = require('util');

const exists = util.promisify(fs.exists);
const readFile = util.promisify(fs.readFile);

// Create a server
const port = 8080;
http.createServer(async (request, response) => {
  const parsedUrl = url.parse(request.url);
  const pathname = parsedUrl.pathname;

  console.log('Request for ' + pathname + ' received.');

  const localPath = `${__dirname}/${pathname}`;
  const fileExists = await exists(localPath);
  if (fileExists) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write(await readFile(localPath));
  } else {
    response.writeHead(404);
    response.write(`File ${pathname} not found`);
  }
  response.end();

}).listen(port);

// Console will print the message
console.log(`Server running at http://127.0.0.1:${port}/`);
