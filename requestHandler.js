const TOKEN = 'bd3503c920776975085980d98b592b1c';
const url = require('url');
// Create the following APIs:
// =========
// LOGIN API -  http://localhost:3008/login
    // :: get hardcoded token
const loginAPI = ()=>{
    return TOKEN;
}
// NAME API - http://localhost:3008/name?token="TOKEN FROM LOGIN"
    // :: check token and return "john" if token is correct. If token incorrect, return "WRONG TOKEN"
const nameAPI = (token)=>{
    if(token === TOKEN){
        return "john"
    }else{
        return "WRONG TOKEN"
    }
}
// DOB API - http://localhost:3008/dob?token="TOKEN FROM LOGIN"
    // :: check token and return "16/01/1993" if token is correct. If token incorrect, return "WRONG TOKEN"
const dobAPI = (token)=>{
    if(token === TOKEN){
        return "16/01/1993"
    }else{
        return "WRONG TOKEN"
    }
}
// PHONE API - http://localhost:3008/phone?token="TOKEN FROM LOGIN"
    // :: check token and return "987654321" if token is correct. If token incorrect, return "WRONG TOKEN"
    const phoneAPI = (token)=>{
        if(token === TOKEN){
            return "987654321"
        }else{
            return "WRONG TOKEN"
        }
    }
// LOGOUT API - http://localhost:3008/logout?token="TOKEN FROM LOGIN"
    // :: check token and return "LOGOUT SUCCESS". If token incorrect, return "WRONG TOKEN"
    const logoutAPI = (token)=>{
        if(token === TOKEN){
            return "LOGOUT SUCCESS"
        }else{
            return "WRONG TOKEN"
        }
    }

const requestHandler = (req, res) => {
    console.log(url.parse(req.url));
    const parsed = url.parse(req.url,true);
    const pathName = parsed.pathname;
    const query = parsed.query;
    console.log(query);
  if(pathName === '/login'){
    res.write(loginAPI());
  }else if(pathName === `/name`){  
    res.write(nameAPI(query.token));
  }else if(pathName === `/dob`){  
    res.write(dobAPI(query.token));
  }else if(pathName === `/phone`){  
    res.write(phoneAPI(query.token));
  }else if(pathName === `/logout`){  
    res.write(logoutAPI(query.token));
  }else{
    res.write('Server Error');
  }
  res.end(); //end the response
}

module.exports = requestHandler;
