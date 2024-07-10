import { merge } from 'lodash';

import request from '@utils/request';

const urls = {
  json: 'http://localhost:3000/api/data.json',
  countryGetAllKist: 'https://restcountries.com/v3.1/all',
  shortLink: 'https://shrtlnk.dev/api/v2/link',
};

const headerShortLink = {
  'api-key': 'qR40LJumS7DX2ElzWSbrvSFD9xanSXyPmKCmmE9prq95P',
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

// const exampleData = {
//   url: 'https://www.cnbcindonesia.com/',
// };

export const callAPI = async (endpoint, method, header = {}, params = {}, data = {}) => {
  const defaultHeader = {
    'Content-Type': 'application/json; charset=UTF-8',
  };

  const headers = merge(defaultHeader, header);
  const options = {
    baseURL: endpoint,
    url: endpoint,
    method,
    headers,
    data,
    params,
  };

  return request(options).then((response) => {
    const responseAPI = response.data;
    return responseAPI;
  });
};

export const getData = () => callAPI(urls.json, 'get');

// export const getCountryList = () => callAPI(urls.countryGetAllKist, 'get', {}, {});
export const getCountryList = (url) => console.log('data', url);
export const getShortLink = (url) => callAPI(urls.shortLink, 'post', headerShortLink, {}, { url });
// export const getShortLink = (url) => callAPI(urls.shortLink, 'post', headerShortLink, {}, { url });
