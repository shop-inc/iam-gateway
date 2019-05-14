import client from '../client';

const loginUser = googleToken => new Promise(((resolve, reject) => client.loginUser({
  token: googleToken,
}, (error, response) => {
  if (error) {
    reject(error.toString());
  }
  resolve(response);
})));

export default loginUser;
