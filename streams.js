const http = require('http');
const fs = require('fs');

const server = http.createServer();

// server.on('request', (req, res) => {
//   const stream = fs.createReadStream('tesdt.txt');

//   stream.on('data', (chunk) => {
//     res.write(chunk);
//   });

//   stream.on('end', () => {
//     res.end();
//   });

//   stream.on('error', (err) => {
//     console.log(err);
//     res.statusCode = 500;
//     res.end('File not found!');
//   });
// });

server.on('request', (req, res) => {
  const stream = fs.createReadStream('test.txt');

  stream.pipe(res);
});

server.listen(3000, '0.0.0.0', () => {
  console.log('listening on http://0.0.0.0:3000');
});
