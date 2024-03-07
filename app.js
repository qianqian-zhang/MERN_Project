//create a web server using http module

const http = require('http');
const fs = require('fs')

const hostname = '0.0.0.0';
const port = 3000;

//read file from fruits
const fruits = fs.readFileSync(`${__dirname}/fruits.json`, 'utf-8');
const data = JSON.parse(fruits);

const server = http.createServer((req, res) => {
    // res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/html');

    //get the url of the request
    const path = req.url;

    //end method MUST be called on each response
    //send data to client
    if(path === '/') {
        res.end('This is the home page!');
    }else if(path === '/product') {
        res.end('This is the product page')
    }else if(path === '/api'){
        res.writeHead(200, { 'Content-type': 'application/json' });
        res.end(fruits);
    }else{
        //set response header
        res.writeHead(404, {
            'Content-type': 'text/html',
            'my-own-header': 'hello-world'
        });
        res.end('This page cannot be found');         
    }


})
    

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });