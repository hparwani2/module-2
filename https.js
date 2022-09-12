let http = require('http');


function getBooks() {
    return [
        {
            name: 'shiva triology',
            author: 'amish tripathi'
        },
        {
            name: 'Rich Dad Poor Dad',
            author: 'Gumnam chaurasia'
        }
    ]
}

function getAuthors() {
    return [
        {
            name: 'Ghumnam chaurasia'
        },
        {
            name: 'amish tripathi'
        }
    ]
}

let requestListener = function(request, response) {
    if(request.url === '/books') {
        response.setHeader('content-type', 'application/json');
        response.writeHead(200);
        response.end(JSON.stringify(getBooks()));
    } else if(request.url === '/authors') {
        response.writeHead(200);
        response.end(getAuthors().toString());
    }
}
const server = http.createServer(requestListener);
server.listen(8080);