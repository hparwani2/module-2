let fs = require('fs');
fs.readFile('./abc.txt', 'utf-8', (error, data) => {
    if(error) {
        console.log(error);
    } else {
        console.log(data);
    }
});
console.log('Hello');