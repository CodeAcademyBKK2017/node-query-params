const http = require('http');
const reqHand = require('./requestHandler');
const port = 3008;

http.createServer(reqHand.requestHandler).listen(port);
console.log(`START SERVER WITH PORT ${port}`);
