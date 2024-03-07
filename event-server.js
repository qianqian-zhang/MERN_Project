const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
  console.log('got a request');
  console.log(req.url);

  res.end('request received');
});

server.on('close', () => {
  console.log('Server closed');
});

server.listen(3000, '0.0.0.0', () => {
  console.log('listening on port http://0.0.0.0:3000');
});
