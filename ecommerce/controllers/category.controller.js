const express = require('express');
const categoryRouter = express.Router();
const { categoryService } = require('./../services/category.service');

categoryRouter.get('/', function(req, res) {
    categoryService
    .getCategories()
    .then((data) => data.map((single) => single.dataValue))
    .then((data) => {
        res.setHeader('content-type', 'application/json');
        res.writeHead(200);
        res.end(JSON.stringify(data));
    })
    .catch((error) => {
        res.setHeader('content-type', 'application/json');
        res.writeHead(500);
        console.log('Error occured while fetching categories');
        res.end(JSON.stringify({
            message : 'error occured'
        }));
    })
})

module.exports = { categoryRouter };