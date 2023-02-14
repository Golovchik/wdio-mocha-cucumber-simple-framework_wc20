const {expect} = require('chai');
const UserEvent = require('../../support/api/events/user.event');
const {userTestData} = require('../testData/user.testData');

describe('API Test For USER', () => {
  const data = userTestData.data;
  const failedData = userTestData.failedData;

  describe.skip('POST Request', function() {
    this.retries(10);

    it('should successfully create user', async () => {
      const response = await UserEvent.createUser(data);

      expect(response.status).to.equal(200);
    });

    it('should unsuccessfully create user', async () => {
      const response = await UserEvent.createUser(failedData);

      expect(response.status).to.equal(200);
    });

    it('should successfully create user from array', async () => {
      const response = await UserEvent.createUserFromArray(data);

      expect(response.status).to.equal(200);
    });

    it('should unsuccessfully create user from array', async () => {
      const response = await UserEvent.createUserFromArray(failedData);

      expect(response.status).to.equal(200);
    });
  });

  describe('GET Request', function() {
    this.retries(10);

    it('should successfully login', async () => {
      const username = userTestData.data.username;
      const password = userTestData.data.password;

      const response = await UserEvent.loginUser(username, password);

      expect(response.status).to.equal(200);
    });

    it('should successfully get user', async () => {
      const username = userTestData.data.username;

      const response = await UserEvent.getUser(username);

      expect(response.status).to.equal(200);
    });

    it('should unsuccessfully get user', async () => {
      const username = userTestData.failedData.username;

      const response = await UserEvent.getUser(username);

      expect(response.status).to.equal(200);
    });

    it('should successfully logout', async () => {
      const response = await UserEvent.logoutUser();

      expect(response.status).to.equal(200);
    });
  });
});
