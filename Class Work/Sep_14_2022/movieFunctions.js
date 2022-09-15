const fs = require('fs');
const path = require('path');

function getFile(){
    let movieFile = fs.readFileSync(path.join(__dirname, "./movieDetails.json"));
    const movieJson = JSON.parse(movieFile);
    return movieJson;
}

function filterAuthors(authors){
    let authorMap = {};
    for(let author of authors){
        authorMap[author] = 1;
    }
    return Object.keys(authorMap);
}

function filterMovies(){
    const movieJson = getFile();
    let distMovies = [];
    for(let movie of movieJson){
        distMovies[movie.name] = movie;
    }
    let uniqueJson = [];
    for(let key of Object.keys(distMovies)){
        uniqueJson.push(distMovies[key]);
    }
    return uniqueJson;
}

function addMovie(req, res){
    const movieJson = getFile();
    movieJson.push(req.body);
    fs.writeFileSync(path.join(__dirname, "./movieDetails.json"), JSON.stringify(movieJson));
    return true;
}

function getDirectors(){
    const movieJson = getFile();
    let authors = movieJson.map((author) => author.director);
    return filterAuthors(authors);
}


function updateMovie(name, req){
    const movieJson = getFile();
    for(let obj of movieJson){
        if(obj.name === name){
            obj[name] = req.body.name;
            obj[director] = req.body.director;
            obj[actor] = req.body.actor;
        }
    }
    fs.writeFileSync(path.join(__dirname, "./movieDetails.json"), JSON.stringify(movieJson));
    return true;
}

function getMovies(){
    const movieJson = filterMovies();
    return movieJson;
}


module.exports = {addMovie, getDirectors, updateMovie, getMovies};