const requestPromise = require('request-promise');
const host = 'http://localhost:3008';

const login = () => requestPromise(`${host}/login`);
const logout = (token) => requestPromise(`${host}/logout?token=${token}`);
const getName = (token) => {
  
  return requestPromise(`${host}/name?token=${token}`);
};
const getDob = (token) => requestPromise(`${host}/dob?token=${token}`);
const getPhone = (token) => requestPromise(`${host}/phone?token=${token}`);

const getUserData = (token) => Promise.all([
  getName(token),
  getDob(token),
  getPhone(token)
]);

const printAllUserData = ([name, dob, phone]) => {
  const output = `NAME:${name} dob:${dob} phone:${phone}`;
 
  return output;
};

const doOperation = () => login()
  .then((token) => {
    return getUserData(token)
      .then(printAllUserData)
      .then(() => logout(token));
  
  })
  .catch(err => err.message);


//doOperation();

module.exports = {
  doOperation: doOperation,
  getUserData: getUserData,
  login: login,
  logout: logout,
  getName: getName,
  getDob: getDob,
  getPhone: getPhone,
  printAllUserData: printAllUserData
};
