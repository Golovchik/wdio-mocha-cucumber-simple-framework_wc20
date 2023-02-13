const {expect} = require('chai');
const {sendRequest} = require('../../support/api/api.helper');
// const {validateSchemaByName} = require('../../support/api/checkSchema');


describe('API Test Suite', () => {
  const petId = 5;

  it('should get pet by id', async () => {
    const response = await sendRequest('get', `pet/${petId}`);
    // const validDataSchema = validateSchemaByName('pet', response.data);
    const stringifiedResponse = JSON.stringify(response.data);

    const mocked = {
      id: 5,
      category: {
        id: 0,
        name: 'string',
      },
      name: 'doggie',
      photoUrls: ['string'],
      tags: [
        {
          id: 0,
          name: 'string',
        },
      ],
      status: 'string',
    };

    const stringifyMocked = JSON.stringify(mocked);

    expect(stringifiedResponse).to.equal(stringifyMocked);
  });
});
