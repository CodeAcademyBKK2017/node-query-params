const url = require('url');

const TOKEN = 'bd503c920776975085980d98b592b1c';

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
    const q = url.parse(req.url, true);

    switch (q.pathname) {
        case '/login':
            res.write(TOKEN);
            break;
        case '/name':
            if(!tokenIsMatch(q.query.token)) {
                res.write('WRONG TOKEN');
                break;
            }

            res.write('john');
            break;
        case '/dob':
            if(!tokenIsMatch(q.query.token)) {
                res.write('WRONG TOKEN');
                break;
            }

            res.write('16/01/1993');
            break;
        case '/phone':
            if(!tokenIsMatch(q.query.token)) {
                res.write('WRONG TOKEN');
                break;
            }

            res.write('987654321');
            break;
        case '/logout':
            if(!tokenIsMatch(q.query.token)) {
                res.write('WRONG TOKEN');
                break;
            }

            res.write('LOGOUT SUCCESS');
            break;
        default:
            responseHtml = 'Your request on the specified URL was not found.';
            break;
    }

    res.end();
}

const handleLoginRequest = () => TOKEN;
const tokenIsMatch = (_token) => _token === TOKEN;

module.exports = requestHandler;
