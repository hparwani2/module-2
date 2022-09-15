const express = require('express');
const fs = require('fs');
const path = require('path');
const {addMovie, getDirectors, updateMovie, getMovies} = require('./movieFunctions');
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());


app.get('/', (req, res)=>{
    res.setHeader('Content-Type', "html");
    res.writeHead(200, "Welcome to Movie Page");
    res.end("Hiii Welcome to the page");
})

app.get('/getDirectors', (req, res)=>{
    const directors = getDirectors();
    res.setHeader('Content-Type', "html");
    res.writeHead(200, "Success");
    res.end(directors.toString());
})

app.get('/getAllMovies', (req, res) => {
    const movies = getMovies();
    res.setHeader('content-type', 'application/json');
    res.writeHead(200, "Success");
    res.end(JSON.stringify(movies));
})

app.post('/addMovie', (req, res)=>{
    if(addMovie(req, res)){
            res.setHeader('content-type', 'application/json');
            res.writeHead(201);
            res.end(JSON.stringify({success: true}));
    } else {
            res.setHeader('content-type', 'application/json');
            res.writeHead(500);
            res.end(JSON.stringify({success: false}));
    }
})

app.put('/updateMovie/:name', (req, res) =>{
    if(updateMovie(req.params.name, req)){
        res.setHeader('content-type', 'application/json');
        res.writeHead(201);
        res.end(JSON.stringify({success: true}));
    }
    else{
        res.setHeader('content-type', 'application/json');
        res.writeHead(500);
        res.end(JSON.stringify({success: false}));
    }
})

app.listen(8000, ()=>{
    console.log("Server Started");
})