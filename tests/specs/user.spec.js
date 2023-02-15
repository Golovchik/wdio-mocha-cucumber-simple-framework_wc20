const {expect} = require('chai');
const {sendRequest} = require('../../support/api/api.helper');
const {
  createUserURL,
  getUserURL,
  createUserFromArrayURL,
  updateUserURL,
  loginUserURL,
  logoutUserURL,
  deleteUserURL,
} = require('../../support/api/endpoints/user.endpoints');
const {userTestData} = require('../testData/user.testData');
const {validateResponse} = require('../../support/api/checkSchema');
const userSchema = require('../../support/api/schemas/userSchema');

describe('API Test For USER', () => {
  const data = userTestData.data;
  const failedData = userTestData.failedData;

  beforeEach(async () => {
    const url = await createUserURL();
    await sendRequest('post', url, data);
  });

  afterEach(async () => {
    const username = data.username;
    const url = await deleteUserURL(username);
    await sendRequest('delete', url);
  });

  describe('POST Request', function() {
    it('should successfully create user', async () => {
      const url = await createUserURL();
      const response = await sendRequest('post', url, data);
      const isCorrectResponse = await validateResponse(
          userSchema.createUser,
          response.data,
      );

      expect(isCorrectResponse).to.be.equal(true);
      expect(response.status).to.equal(200);
    });

    it('should unsuccessfully create user', async () => {
      const arrayData = [{}, {}];
      const url = await createUserURL();
      const response = await sendRequest('post', url, arrayData);

      expect(response.status).to.equal(500);
    });

    it('should successfully create user from array', async () => {
      const arrayData = [data];
      const url = await createUserFromArrayURL();
      const response = await sendRequest('post', url, arrayData);
      const isCorrectResponse = await validateResponse(
          userSchema.createUserFromArray,
          response.data,
      );

      expect(isCorrectResponse).to.be.equal(true);
      expect(response.status).to.equal(200);
      expect(response.data.message).to.equal('ok');
    });

    it('should unsuccessfully create user from array', async () => {
      const url = await createUserFromArrayURL();
      const response = await sendRequest('post', url, failedData);
      expect(response.status).to.equal(500);
    });
  });

  describe('GET Request', function() {
    it('should successfully login', async () => {
      const userName = data.username;
      const password = data.password;
      const url = await loginUserURL(userName, password);
      const response = await sendRequest('get', url);
      const isCorrectResponse = await validateResponse(
          userSchema.loginUser,
          response.data,
      );

      expect(isCorrectResponse).to.be.equal(true);
      expect(response.status).to.equal(200);
    });

    it('should successfully get user', async () => {
      const username = data.username;
      const url = await getUserURL(username);
      const response = await sendRequest('get', url);
      const isCorrectResponse = await validateResponse(
          userSchema.getUser,
          response.data,
      );

      expect(isCorrectResponse).to.be.equal(true);
      expect(response.status).to.equal(200);
      expect(response.data.username).to.equal(username);
    });

    it('should unsuccessfully get user', async () => {
      const username = failedData.username;
      const url = await getUserURL(username);
      const response = await sendRequest('get', url);

      expect(response.status).to.equal(404);
    });

    it('should successfully logout', async () => {
      const url = await logoutUserURL();
      const response = await sendRequest('get', url);
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
      const username = data.username;
      const url = await updateUserURL(username);
      const response = await sendRequest('put', url, data);
      const isCorrectResponse = await validateResponse(
          userSchema.updateUser,
          response.data,
      );

      expect(isCorrectResponse).to.be.equal(true);
      expect(response.status).to.equal(200);
    });

    it('should unsuccessfully update user', async () => {
      const username = '';
      const url = await updateUserURL(username);
      const response = await sendRequest('put', url, failedData);

      expect(response.status).to.equal(405);
    });
  });

  describe('DELETE Request', function() {
    it('should successfully delete user', async () => {
      const username = data.username;
      const url = await deleteUserURL(username);
      const response = await sendRequest('delete', url);
      const isCorrectResponse = await validateResponse(
          userSchema.deleteUser,
          response.data,
      );

      expect(isCorrectResponse).to.be.equal(true);
      expect(response.status).to.equal(200);
      expect(response.data.message).to.equal(username);
    });

    it('should unsuccessfully delete user', async () => {
      const username = failedData.username;
      const url = await deleteUserURL(username);
      const response = await sendRequest('delete', url);

      expect(response.status).to.equal(404);
    });
  });
});
