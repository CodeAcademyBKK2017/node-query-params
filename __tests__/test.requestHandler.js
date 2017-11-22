const requestHandler = require('../requestHandler');
//Success Case
const correctToken = 'bd3503c920776975085980d98b592b1c';
const worngToken = 'xxx';
const err = 'WRONG TOKEN';
test('test for login API Success',()=>{
    expect(requestHandler.loginAPI()).toBe(correctToken)
})
test('test for Name API Success',()=>{
    expect(requestHandler.nameAPI(correctToken)).toBe('john')
})
test('test for dob API Success',()=>{
    expect(requestHandler.dobAPI(correctToken)).toBe('16/01/1993')
})
test('test for phone API Success',()=>{
    expect(requestHandler.phoneAPI(correctToken)).toBe('987654321')
})
test('test for logout API Success',()=>{
    expect(requestHandler.logoutAPI(correctToken)).toBe('LOGOUT SUCCESS')
})
let request ={};
const response = {
     write : jest.fn(),
     end : jest.fn()
}
test('Test for response with url=/ is working',()=>{
    request.url = 'http://localhost:3008/';
    requestHandler.requestHandler(request,response);
    expect(response.write).toHaveBeenCalled();
    expect(response.write).toHaveBeenCalledWith('Server Error');
})
test('Test for response with url=/login is working',()=>{
    request.url = 'http://localhost:3008/login';
    requestHandler.requestHandler(request,response);
    expect(response.write).toHaveBeenCalled();
})
test('Test for response with url=/name is working',()=>{
    request.url = `http://localhost:3008/name?=${correctToken}`;
    requestHandler.requestHandler(request,response);
    expect(response.write).toHaveBeenCalled();
})
test('Test for response with url=/dob is working',()=>{
    request.url = `http://localhost:3008/dob?=${correctToken}`;
    requestHandler.requestHandler(request,response);
    expect(response.write).toHaveBeenCalled();
})
test('Test for response with url=/phone is working',()=>{
    request.url = `http://localhost:3008/phone?=${correctToken}`;
    requestHandler.requestHandler(request,response);
    expect(response.write).toHaveBeenCalled();
})
test('Test for response with url=/logout is working',()=>{
    request.url = `http://localhost:3008/logout?=${correctToken}`;
    requestHandler.requestHandler(request,response);
    expect(response.write).toHaveBeenCalled();
})
//Fail Case
test('test for Name API Fail',()=>{
    expect(requestHandler.nameAPI(worngToken)).toBe(err)
})
test('test for dob API Fail',()=>{
    expect(requestHandler.dobAPI(worngToken)).toBe(err)
})
test('test for phone API Fail',()=>{
    expect(requestHandler.phoneAPI(worngToken)).toBe(err)
})
test('test for logout API Fail',()=>{
    expect(requestHandler.logoutAPI(worngToken)).toBe(err)
})