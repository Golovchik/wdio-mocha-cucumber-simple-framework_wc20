const {page} = require('../../po/pages/index');
const {getConvertTextToVariable} = require('../helpers');

const checkElementIsDisplayed = async (el, text, pg, comp) => {
  el = await getConvertTextToVariable(el);
  comp = await getConvertTextToVariable(comp);
  const currentElement = await page(pg)[comp].item(el);
  await expect(currentElement).toBeDisplayed();
};

module.exports = {
  checkElementIsDisplayed,
};
