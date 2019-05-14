import client from '../client';

const createUser = googleToken => new Promise(((resolve, reject) => client.createUser({
  token: googleToken,
}, (error, response) => {
  if (error) {
    reject(error.toString());
  }
  resolve(response);
})));

export default createUser;
