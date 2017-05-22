'use strict';

const http = require('http');
const app = require('./dist/app').default;
const port = 3000;
const host = '127.0.0.1';


const server = http.createServer(app);

server.listen(port, host, () => {
    console.log(`listenning at http://${host}:${port}`);
});