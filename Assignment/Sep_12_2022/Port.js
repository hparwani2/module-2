const http= require('http');

let port = 8448;

http.createServer((request, response) => {
    console.log(request.url + " " +request.method);
    response.writeHead(200, "Success");
    response.end("Hello request");
}).listen(port);