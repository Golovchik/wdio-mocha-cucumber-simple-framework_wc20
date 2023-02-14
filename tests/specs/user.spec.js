const {expect} = require('chai');
const UserEvent = require('../../support/api/events/user.event');
const {userTestData} = require('../testData/user.testData');
const {validateResponse} = require('../../support/api/checkSchema');
const {userSchema} = require('../../support/api/schemas/index');

describe('API Test For USER', () => {
  const data = userTestData.data;
  const failedData = userTestData.failedData;

  beforeEach(async () => {
    await UserEvent.createTestData(data);
  });

  afterEach(async () => {
    const userName = data.username;
    await UserEvent.clearTestData(userName);
  });

  describe('POST Request', function() {
    it('should successfully create user', async () => {
      const response = await UserEvent.createUser(data);
      const isCorrectResponse = await validateResponse(
          userSchema.createUser,
          response.data,
      );

      expect(isCorrectResponse).to.be.equal(true);
      expect(response.status).to.equal(200);
    });

    it('should unsuccessfully create user', async () => {
      const response = await UserEvent.createUser([{}, {}]);

      expect(response.status).to.equal(500);
    });

    it('should successfully create user from array', async () => {
      const arrayData = [data];
      const response = await UserEvent.createUserFromArray(arrayData);
      const isCorrectResponse = await validateResponse(
          userSchema.createUserFromArray,
          response.data,
      );

      expect(isCorrectResponse).to.be.equal(true);
      expect(response.status).to.equal(200);
      expect(response.data.message).to.equal('ok');
    });

    it('should unsuccessfully create user from array', async () => {
      const response = await UserEvent.createUserFromArray(failedData);
      expect(response.status).to.equal(500);
    });
  });

  describe('GET Request', function() {
    it('should successfully login', async () => {
      const userName = data.username;
      const password = data.password;
      const response = await UserEvent.loginUser(userName, password);
      const isCorrectResponse = await validateResponse(
          userSchema.loginUser,
          response.data,
      );

      expect(isCorrectResponse).to.be.equal(true);
      expect(response.status).to.equal(200);
    });

    it('should successfully get user', async () => {
      const userName = data.username;
      const response = await UserEvent.getUser(userName);
      const isCorrectResponse = await validateResponse(
          userSchema.getUser,
          response.data,
      );

      expect(isCorrectResponse).to.be.equal(true);
      expect(response.status).to.equal(200);
      expect(response.data.username).to.equal(userName);
    });

    it('should unsuccessfully get user', async () => {
      const userName = failedData.username;
      const response = await UserEvent.getUser(userName);

      expect(response.status).to.equal(404);
    });

    it('should successfully logout', async () => {
      const response = await UserEvent.logoutUser();
      const isCorrectResponse = await validateResponse(
          userSchema.logoutUser,
          response.data,
      );

      expect(isCorrectResponse).to.be.equal(true);
      expect(response.status).to.equal(200);
      expect(response.data.message).to.equal('ok');
    });
  });

  describe('PUT Request', function() {
    it('should successfully update user', async () => {
      const response = await UserEvent.updateUser(data.username, data);
      const isCorrectResponse = await validateResponse(
          userSchema.updateUser,
          response.data,
      );

      expect(isCorrectResponse).to.be.equal(true);
      expect(response.status).to.equal(200);
    });

    it('should unsuccessfully update user', async () => {
      const response = await UserEvent.updateUser('', failedData);

      expect(response.status).to.equal(405);
    });
  });

  describe('DELETE Request', function() {
    it('should successfully delete user', async () => {
      const userName = data.username;
      const response = await UserEvent.deleteUser(userName);
      const isCorrectResponse = await validateResponse(
          userSchema.deleteUser,
          response.data,
      );

      expect(isCorrectResponse).to.be.equal(true);
      expect(response.status).to.equal(200);
      expect(response.data.message).to.equal(userName);
    });

    it('should unsuccessfully delete user', async () => {
      const userName = failedData.username;
      const response = await UserEvent.deleteUser(userName);

      expect(response.status).to.equal(404);
    });
  });
});
