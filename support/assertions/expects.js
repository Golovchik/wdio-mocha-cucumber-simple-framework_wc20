const {pageFactory} = require('../../po/pages/index');
const {getConvertTextToVariable} = require('../helpers');

const checkElementIsDisplayed = async (element, text, page, component) => {
  element = await getConvertTextToVariable(element);
  component = await getConvertTextToVariable(component);
  const currentElement = await pageFactory(page)[component].item(element);
  await expect(currentElement).toBeDisplayed();
};

module.exports = {
  checkElementIsDisplayed,
};
