const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

function getBooks(){
    let books = fs.readFileSync(path.join(__dirname,'books.json'));
    return books;
}

app.get("/books", (req, res)=>{
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.end(JSON.stringify(JSON.parse(getBooks())));
})


app.listen(8000, ()=>{
    console.log("Server started");
})