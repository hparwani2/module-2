let http = require('http');

function getBooks() {
    return [
        {
            name: 'Shiva Triology',
            auther: 'Amish Tripathi'
        },
        {
            name: 'Rich Dad Poor Dad',
            auther: 'Yuvraj Mule'
        }
    ]
}

function getAuthers() {
    return [
        {
            name: 'Yuvraj Mule'
        },
        {
            name: 'Amish Tripathi'
        }
    ]
}

let requestListner = function(request, response) {
    if(request.url === '/books') {
        response.setHeader('Content-Type', 'Application/json');
        response.writeHead(200);
        response.end(JSON.stringify(getBooks()));
    } else if(request.url === '/authers') {
        response.writeHead(200);
        response.end(getAuthers().toString());
    }
}

const server = http.createServer(requestListner);
server.listen(8070);
