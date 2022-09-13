const http = require('http');

const returnCSV = ()=>{
    let result = "";

    for(let i=0; i<5; i++){
        let temp = "";
        temp+=`${i}Abc,${i}bcd,${i}gjs\n`;
        result+=temp;
    }
    return result;
}


http.createServer((request, response)=>{
    console.log(request.url + "  " + request.method);
    response.writeHead(200, {'Content-Type': 'text/csv'});
    response.end(returnCSV());
}).listen(8400);