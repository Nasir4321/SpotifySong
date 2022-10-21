import axios from 'axios';
import { Buffer } from 'buffer';
import qs from 'qs';

export const Get = (token, url, params) => {
  return new Promise(function (resolve, reject) {
    axios
      .get(url, {
        params: params,
        'Content-Type': 'application/x-www-form-urlencoded',
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(function (response) {
        console.log('response', response);
        resolve(response);
      })
      .catch(function (error) {
        console.log('error', error);

        reject(error);
      });
  });
};

export const Post = (token, url, body, params) => {
  return new Promise(function (resolve, reject) {
    axios
      .post(url, body, {
        params: params,
        headers: {
          'Content-Type': 'application/form-data',
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (response) {
        resolve(response);
      })
      .catch(function (error) {
        reject(error);
      });
  });
};

export const PostToken = (url, clientId, clientSecrets) => {
  const data = {
    grant_type: 'client_credentials',
  };
  return new Promise(function (resolve, reject) {
    axios
      .post(url, qs.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization:
            'Basic ' + Buffer.from(clientId + ':' + clientSecrets, 'base64'),
        },
        auth: {
          username: clientId,
          password: clientSecrets,
        },
      })
      .then(function (response) {
        resolve(response);
      })
      .catch(function (error) {
        reject(error);
      });
  });
};


