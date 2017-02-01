const path = require('path');
const express = require('express');

const server = express();

const directory = path.join(__dirname, '/../', (process.argv[2] || ''), '/');
const port = (process.argv[3] || 4000);

server.use(express.static(directory));
server.listen(port);

console.log(`Server started at http://localhost:${port}/`);
console.log(`... serving folder ${directory}`);
