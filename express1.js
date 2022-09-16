// Loading expresss module, which would return a function to create a application
const express = require('Express');
// Call CreateApplication or express function
const app = express();

const fs = require("fs");
const bodyParser = require('body-parser');

app.use(bodyParser.json());


/*

 * a - function
 * b - function
 
 */

function getAllHeros() {
    let data = fs.readFileSync('/Heros.json');
    return JSON.parse(data);
}
function addHero(hero) {
    let data = fs.readFileSync('/Heros.json');
    let jsonData = JSON.parse(data);
    jsonData.push(hero);
    fs.writeFileSync('/Heros.json', JSON.stringify(jsonData));
    return true;
}


function getHeroByNo(no) {
    let data = fs.readFileSync('/Heros.json');
    let jsonData = JSON.parse(data);
    return jsonData.filter((hero) => hero.no === no)[0];
}

function getAllProducers() {
    let data = fs.readFileSync('Heros.json');
    let jsonData = JSON.parse(data);
    return jsonData.map((hero) => hero.producer);
}

app.get("/a", function(req, res) {
    res.writeHead(200);
    res.end('Hye I am A')
});

app.get("/b", function(req, res) {
    res.writeHead(200);
    res.end('Hye I am B');
});

app.get("/Heros", function(req, res) {
    let heros = null;
    if(req.query) {
        heros = getHerosByQueryParam(req.query);
    } else {
        heros = getAllHeros();
    }
    if(heros) {
        res.setHeader("Content-Type", "application/json");
        res.writeHead(200);
        res.end(JSON.stringify(heros));
    } else {
        res.writeHead(500);
    }
});

app.get("/hero")