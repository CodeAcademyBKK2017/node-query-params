const url = require('url');

const TOKEN = 'bd3503c920776975085980d98b592b1c';
const WRONG_TOKEN = 'WRONG TOKEN';

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
    // res.write('Hello World!'); //write a response to the client
    // res.end(); //end the response

    const parsed = url.parse(req.url, true);
    const query = parsed.query;
    const token = query.token;
    // console.log('parsed:', parsed);
    // console.log('query:', query);
    // console.log('parsed pathname:', parsed.pathname);

    switch (parsed.pathname) {
        
        case '/login':
            res.write(TOKEN);
            break;
        
        case '/name':
            if(token === TOKEN) {
                res.write('john');
            }
            else {
                res.write(WRONG_TOKEN);
            }
            break;
        
        case '/dob':
            if(token === TOKEN) {
                res.write('16/01/1993');
            }
            else {
                res.write(WRONG_TOKEN);
            }
            break;

        case '/phone':
            if(token === TOKEN) {
                res.write('987654321');
            }
            else {
                res.write(WRONG_TOKEN);
            }
            break;

        case '/logout':
            if(token === TOKEN) {
                res.write('LOGOUT SUCCESS');
            }
            else {
                res.write(WRONG_TOKEN);
            }
            break;
    
        default:
            res.write('Page not found.');
            break;
    }
    res.end();
}

module.exports = requestHandler;
