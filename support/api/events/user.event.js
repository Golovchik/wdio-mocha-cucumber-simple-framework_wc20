const {sendRequest} = require('../api.helper');

class UserEvent {
  constructor() {}

  static async createUser(data) {
    const response = await sendRequest('post', 'user', data);
    return response;
  }

  static async getUser(userName) {
    const response = await sendRequest('get', `user/${userName}`);
    return response;
  }

  static async createUserFromArray(data) {
    const response = await sendRequest('post', 'user/createWithArray', data);
    return response;
  }

  static async updateUser(userName, data) {
    const response = await sendRequest('put', `user/${userName}`, data);
    return response;
  }

  static async loginUser(userName, password) {
    const url = `user/login?username=${userName}&password=${password}`;
    const response = await sendRequest('get', url);
    return response;
  }

  static async logoutUser() {
    const response = await sendRequest('get', 'user/logout');
    return response;
  }

  static async deleteUser(userName) {
    const response = await sendRequest('delete', `user/${userName}`);
    return response;
  }
}

module.exports = UserEvent;
