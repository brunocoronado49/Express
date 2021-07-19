/// Ejemplo de servidor con NodeJS

const http = require('http');
const colors = require('colors');

const server = http.createServer(function newServer(req, res) {
    res.status = 200;
    res.setHeader('contentType', 'text/plain');
    res.end('Hello world!');
});

server.listen(3000, () => console.log('Server en puerto 3000.'.green));