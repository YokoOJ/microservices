const http = require('http');

var server = http.createServer(
    (request, response) => {
        response.setHeader('Content-type', 'text/html');
        response.write('Hello world!');
        response.end();
    }
);

server.listen(3000);
console.log("Server start!");