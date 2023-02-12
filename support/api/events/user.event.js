const {sendRequest} = require('..api.helper/httpHandler');

class UserEvent {
  async getUser(userName) {
    const response = await sendRequest('get', userName);
    return response;
  }
}

module.exports = UserEvent;
