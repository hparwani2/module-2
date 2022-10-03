//express is a library that would be used for routing purpose
const express = require('express');
const { PORT } = require('./configs/server.config');
const { categoryRouter } = require('./controllers/category.controller');

const app = express();
app.use('/category', categoryRouter);

// app.get('/', function(req, res) {
//     res.writeHead(200);
//     res.end();
// });

app.listen(PORT, () => {
    console.log('APP IS RUNNING ON PORT: '+PORT);
});