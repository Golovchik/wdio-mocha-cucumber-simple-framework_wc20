const axios = require('axios');
const {TEST_URL} = require('../configs/endpoints');

const sendRequest = async (method, url, data = null, headers = {}) => {
  try {
    const response = await axios({
      method,
      url: `${TEST_URL}/${url}`,
      headers: getHeaders(headers),
      data,
    });
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

function getHeaders(headers, method) {
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
