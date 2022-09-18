// loading express module, which would return a function to create a application.
const express = require('express');
// call createApplication or express function
const app = express();

const fs = require("fs");
const bodyParser = require('body-parser');

app.use(bodyParser.json());
/*
[
    {
        name: 'Amish'
    },
    {
        name: 'Sadguru'
    },
    {
        name: 'Amish'
    }
]

function removeDuplicates(authors) {
    let obj = {};
    for(let author of authors) {
        if(!obj[author.name]) {
            obj[author.name] = author;
        }
    }
    return Object.values(obj);
}



*/


/*

/a - function
/b - function

*/

function ascSort() {
    let data = fs.readFileSync('./github/module-2/books.json');
    let jsonData = JSON.parse(data);
    return jsonData.sort((a, b) => a.name.localCompare(b.name));
}

function getAllBooks() {
    let data = fs.readFileSync('./github/module-2/books.json');
    return JSON.parse(data);
}

function addBook(book) {
    let data = fs.readFileSync('./github/module-2/books.json');
    let jsonData = JSON.parse(data);
    jsonData.push(book);
    fs.writeFileSync('./github/module-2/books.json', JSON.stringify(jsonData));
    return true;
}


function getBookById(id) {
    let data = fs.readFileSync('./github/module-2/books.json');
    let jsonData = JSON.parse(data);
    return jsonData.filter((book) => book.id === id)[0];
}

function getAllAuthors() {
    let data = fs.readFileSync('./github/module-2/books.json');
    let jsonData = JSON.parse(data);
    return jsonData.map((book) => book.author);
}

app.all('/books/*', function(req, res, next) {
    if(req.headers['username'] === 'pallab' 
    && req.headers['password'] === 'pallab@123') {
        next();
    } else {
        res.setHeader('Content-Type', 'application/json');
        res.writeHead(401);
        res.end(JSON.stringify({status: "authorization fail"}));
    }
});


app.get("/authors", function(req, res) {
    let authors = getAllAuthors();
    if(authors) {
        res.setHeader("Content-Type", "application/json");
        res.writeHead(200);
        res.end(JSON.stringify(authors));
    } else {
        res.writeHead(500);
    }
});

// app.use(function(req, res, next) {
//     if(req.headers['username'] === 'pallab' 
//     && req.headers['password'] === 'pallab@123') {
//         next();
//     } else {
//         res.setHeader('Content-Type', 'application/json');
//         res.writeHead(401);
//         res.end(JSON.stringify({status: "authorization fail"}));
//     }
// });



app.get("/a", function(req, res) {
    res.writeHead(200);
    res.end('Hey i am a');
});

app.get("/b", function(req, res) {
    res.writeHead(200);
    res.end('Hey i am b');
});

app.get("/books", function(req, res) {
    let books = null;
    books = getAllBooks();
    if(books) {
        res.setHeader("Content-Type", "application/json");
        res.writeHead(200);
        res.end(JSON.stringify(books));
    } else {
        res.writeHead(500);
    }
});

app.get("/books/:id", function(req, res) {
    
    let book = getBookById(parseInt(req.params.id));
    if(book) {
        res.setHeader("Content-Type", "application/json");
        res.writeHead(200);
        res.end(JSON.stringify(book));
    } else {
        res.writeHead(500);
    }
});

app.post("/books", function(req, res) {
    let success = addBook(req.body);
    if(success) {
        res.setHeader('content-type', 'application/json');
        res.writeHead(201);
        res.end(JSON.stringify({success: true}));
    } else {
        res.setHeader('content-type', 'application/json');
        res.writeHead(500);
        res.end(JSON.stringify({success: false}));
    }
});

app.put("/books", function(req, res) {

});




app.listen(8080, () => {
    console.log('application started');
});


/*

/books ---> array of books

*/