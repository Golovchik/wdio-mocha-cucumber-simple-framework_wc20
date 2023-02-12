const {expect} = require('chai');
const {sendRequest} = require('../../support/api/api.helper');

describe('API Test Suite USER', () => {
  it('should get', async () => {
    const response = await sendRequest('get', `user/Vlad`);
    
    expect(response.status).to.equal(200);
  });
});
