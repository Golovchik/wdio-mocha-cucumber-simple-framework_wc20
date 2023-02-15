const createUserURL = async () => `user`;
const getUserURL = async (username) => `user/${username}`;
const createUserFromArrayURL = async () => `user/createWithArray`;
const updateUserURL = async (username) => `user/${username}`;
const loginUserURL = async (username, password) =>
  `user/login?username=${username}&password=${password}`;
const logoutUserURL = async () => `user/logout`;
const deleteUserURL = async (username) => `user/${username}`;

module.exports = {
  createUserURL,
  getUserURL,
  createUserFromArrayURL,
  updateUserURL,
  loginUserURL,
  logoutUserURL,
  deleteUserURL,
};
