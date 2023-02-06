const axios = require('axios');
const {TEST_URL} = require('../configs/endpoints');

const sendRequest = async (method, url, data = null, headers = {}) => {
  try {
    const config = await getConfig(method, url, data, headers);
    const response = await axios(config);
    return {
      status: response.status,
      data: response.data,
    };
  } catch (error) {
    return {
      status: error.response.status,
    };
  }
};

async function getConfig(method, url, data, headers) {
  const config = {
    method,
    url: `${TEST_URL}/${url}`,
    data,
  };
  config.headers = await getHeaders(headers);
  return config;
}

async function getHeaders(headers) {
  const defaultHeaders = {
    'Content-Type': 'application/json',
  };
  return typeof headers === 'object' ?
    Object.assign(defaultHeaders, headers) :
    defaultHeaders;
}

module.exports = {
  sendRequest,
};
