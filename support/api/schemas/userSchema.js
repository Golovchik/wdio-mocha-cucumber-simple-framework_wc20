const successfulOperation = {
  type: 'object',
  properties: {
    code: {
      type: 'integer',
    },
    type: {
      type: 'string',
    },
    message: {
      type: 'string',
    },
  },
  required: ['code', 'type', 'message'],
};

module.exports = {
  createUser: successfulOperation,
  getUser: {
    'type': 'object',
    'properties': {
      'id': {
        'type': 'integer',
      },
      'username': {
        'type': 'string',
      },
      'firstName': {
        'type': 'string',
      },
      'lastName': {
        'type': 'string',
      },
      'email': {
        'type': 'string',
      },
      'password': {
        'type': 'string',
      },
      'phone': {
        'type': 'string',
      },
      'userStatus': {
        'type': 'integer',
      },
    },
    'required': [
      'id',
      'username',
      'firstName',
      'lastName',
      'email',
      'password',
      'phone',
      'userStatus',
    ],
  },
  createUserFromArray: successfulOperation,
  updateUser: successfulOperation,
  loginUser: successfulOperation,
  logoutUser: successfulOperation,
  deleteUser: successfulOperation,
};
