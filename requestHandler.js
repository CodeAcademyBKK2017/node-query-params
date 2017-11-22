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
    const q = url.parse(req.url,true)
    
    if (q.pathname === '/login'){
        res.write(TOKEN)
    }
    else if(q.pathname === `/name`){
        if(q.query.token !== TOKEN) res.write('TOKEN WRONG');
        else res.write('john')
    }
    else if(q.pathname === '/dob'){
        if(q.query.token !== TOKEN) res.write('TOKEN WRONG');
        else res.write('16/01/1993')
    }
    else if(q.pathname === '/phone'){
        if(q.query.token !== TOKEN) res.write('TOKEN WRONG');
        else res.write('987654321')
    }
    else if(q.pathname === '/logout'){
        if(q.query.token !== TOKEN) res.write('TOKEN WRONG');
        else res.write('LOGOUT SUCCESS')
    }
    else{
        res.write('Hello World!'); //write a response to the client
    }
    
  res.end(); //end the response
}

module.exports = requestHandler;
