const http = require('http');

http.createServer((request, response) => {
    response.writeHead(400, 'The requested page is not found');
    response.end("HTTP 400 : Request Not Found");
}).listen(8080);