const http = require('http');
const requestHandler = require('./requestHandler');

http.createServer(requestHandler).listen(3008);
