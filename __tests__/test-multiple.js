const multiple = require('../multiple');
const requestPromise = require('request-promise');
test('Test login',()=>{
  multiple.login();
  expect(requestPromise).toHaveBeenLastCalledWith('http://localhost:3008/login');
});