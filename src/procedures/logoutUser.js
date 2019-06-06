import client from '../client';

const logoutUser = userToken => new Promise(((resolve, reject) => client.logoutUser({
  token: userToken,
}, (error, response) => {
  if (error) {
    reject(error.toString());
  }
  resolve(response);
})));

export default logoutUser;
