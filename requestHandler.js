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
let token = '';

    const login = (req,res) =>{
        token = "bd3503c920776975085980d98b592b1c";
        res.write("bd3503c920776975085980d98b592b1c")
        res.end();
    }
    
    const name = (req,res) =>{
        const parthQ = url.parse(req.url,true);
        console.log(parthQ);
        if(parthQ.query.token === token){
            res.write('john')
        }else{
            res.write('WRONG TOKEN')
        }
        
        res.end();
    }
    
    const dob = (req,res) =>{
        const parthQ = url.parse(req.url,true);
        if(parthQ.query.token === token){
            res.write('16/01/1993')
        }else{
            res.write('WRONG TOKEN')
        }
        
        res.end();
    }
    
    const phone = (req,res) =>{
        const parthQ = url.parse(req.url,true);
        if(parthQ.query.token === token){
            res.write('987654321')
        }else{
            res.write('WRONG TOKEN')
        }
        
        res.end();
    }
    
    const logout = (req,res) =>{
        const parthQ = url.parse(req.url,true);
        if(parthQ.query.token === token){
            res.write('LOGOUT SUCCESS')
        }else{
            res.write('WRONG TOKEN')
        }
        
        res.end();
    }

const requestHandler = (req, res) => {
    switch (req.url) {
        case `/login`:
            login(req,res);
            break;
        case `/dob?token=${token}`:
            dob(req,res);
            break;
        case `/name?token=${token}`:
            name(req,res);
            break;
        case `/phone?token=${token}`:
            phone(req,res);
            break;
        case '/logout':
            logout(req,res);
            break;
        default:
            res.write('Hello World!');
            break;
    }
   //write a response to the client
  res.end(); //end the response
}

module.exports = requestHandler;
