const TOKEN = 'bd3503c920776975085980d98b592b1c';
const url = require('url');
// Create the following APIs:
// =========
// LOGIN API -  http://localhost:3008/login
    // :: get hardcoded token

// NAME API - http://localhost:3008/name?token="TOKEN FROM LOGIN"
    // :: check token and return "john" if token is correct. If token incorrect, return "WRONG TOKEN"

// DOB API - http://localhost:3008/dob?token="TOKEN FROM LOGIN"
    // :: check token and return "16/01/1993" if token is correct. If token incorrect, return "WRONG TOKEN"

// PHONE API - http://localhost:3008/phone?token="TOKEN FROM LOGIN"
    // :: check token and return "987654321" if token is correct. If token incorrect, return "WRONG TOKEN"

// LOGOUT API - http://localhost:3008/logout?token="TOKEN FROM LOGIN"
    // :: check token and return "LOGOUT SUCCESS". If token incorrect, return "WRONG TOKEN"


const requestHandler = (req, res) => {
    const requestData = url.parse(req.url, true); 
    // url.parse(req.url);  token=123"
    // url.parse(req.url, true);  {token: 123}

    if(requestData.pathname === '/login'){
        res.write(TOKEN); //write a response to the client   
    }else if(requestData.pathname === '/name'){ //name?token=1234
        if(requestData.query.token === TOKEN){
            res.write('john');
        }else{
            res.write('WRONG TOKEN');
        }
    }else if(requestData.pathname === '/dob'){
        if(requestData.query.token === TOKEN){
            res.write('16/01/1993');
        }else{
            res.write('WRONG TOKEN');
        }
    }else if(requestData.pathname === '/phone'){
        if(requestData.query.token === TOKEN){
            res.write('987654321');
        }else{
            res.write('WRONG TOKEN');
        }
    }else if(requestData.pathname === '/logout'){
        if(requestData.query.token === TOKEN){
            res.write('LOGOUT SUCCESS');
        }else{
            res.write('WRONG TOKEN');
        }
    }else{
        res.write('Hello World!'); //write a response to the client
    }
  res.end(); //end the response
}

module.exports = requestHandler;
