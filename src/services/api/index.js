import config from './config';

export const apiCall = (url, options = {}) => {
  return fetch(`${config.url}${url}`, options)
    .then(validate);
}

const validate = (response) => {
  return response.json().then(res => {
    if(response.status >= 200 && response.status < 300) {
      return res;
    } else {
      console.log('error');
      console.log(res);
      throw new Error(res.error);
    }
  })
}