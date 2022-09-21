const http = require("http");

const requestListener = function (request, response) {
  response.writeHead(404);
  response.end(JSON.stringify({ status: "something went wrong" }));
};

const server = http.createServer(requestListener);
server.listen(8082);
