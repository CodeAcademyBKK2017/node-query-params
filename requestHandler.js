const url = require('url');
const crypto = require('crypto');

const TOKEN = 'bd3503c920776975085980d98b592b1c';
const WRONG_TOKEN = 'WRONG TOKEN';
const USER_NAME = 'john';
const USER_DOB = '16/01/1993';
const USER_PHONE = '987654321';
const LOGOUT_SUCCESS = 'LOGOUT SUCCESS';
const PAGE_NOT_FOUND = 'Page not found.';
const WRONG_METHOD = 'WRONG METHOD';

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
    const method = req.method;
    const token = query.token;
    
    console.log('>>>>>START');

    // console.log('parsed:', parsed);
    console.log('pathname:', parsed.pathname);
    console.log('query:', query);
    console.log('method:', method);

    switch (parsed.pathname) {
        
        case '/login':
            if(method === 'POST') {
                // res.write(TOKEN);
                
                const randomNumber = Math.random();
                const randomToken = crypto.createHash('md5').update(`${randomNumber}`).digest("hex");
                res.write(`${randomToken}`);
            }
            else {
                res.write(WRONG_METHOD);
            }
            break;
        
        case '/name':
            if(token === TOKEN) {
                res.write(USER_NAME);
            }
            else {
                res.write(WRONG_TOKEN);
            }
            break;
        
        case '/dob':
            if(token === TOKEN) {
                res.write(USER_DOB);
            }
            else {
                res.write(WRONG_TOKEN);
            }
            break;

        case '/phone':
            if(token === TOKEN) {
                res.write(USER_PHONE);
            }
            else {
                res.write(WRONG_TOKEN);
            }
            break;

        case '/logout':
            if(token === TOKEN) {
                res.write(LOGOUT_SUCCESS);
            }
            else {
                res.write(WRONG_TOKEN);
            }
            break;
    
        default:
            res.write(PAGE_NOT_FOUND);
            break;
    }
    res.end();

    console.log('<<<<<END');
}

module.exports = {
    requestHandler,
    TOKEN,
    WRONG_TOKEN,
    USER_NAME,
    USER_DOB,
    USER_PHONE,
    LOGOUT_SUCCESS,
    PAGE_NOT_FOUND
};
