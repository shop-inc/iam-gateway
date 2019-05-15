import client from '../client';

const verifyUser = emailToken => new Promise(((resolve, reject) => client.verifyUser({
  token: emailToken,
}, (error, response) => {
  if (error) {
    reject(error.toString());
  }
  resolve(response);
})));

export default verifyUser;
