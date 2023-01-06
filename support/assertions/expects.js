// const {pageFactory} = require('../../po/pages/index');
// const {getConvertTextToVariable} = require('../helpers');

const checkElementIsDisplayed = async (element) => {
  await expect(element).toBeDisplayed();
};

module.exports = {
  checkElementIsDisplayed,
};
