const {expect} = require('chai');
const {sendRequest} = require('../../support/api/api.helper');

describe('API Test Suite', () => {
  const petId = 1;

  it('should get pet by id', async () => {
    const response = await sendRequest('get', `pet/${petId}`);

    expect(response.status).to.equal(200);
    expect(response.data.id).to.equal(petId);
  });
});
