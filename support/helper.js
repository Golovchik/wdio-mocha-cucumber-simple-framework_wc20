const {page} = require('../po/pages/index');

const getConvertTextToVariable = (text) => {
  let newText = text.split(' ').join('');
  newText = newText[0].toLowerCase() + newText.slice(1);
  return newText;
};

const selectItemInList = async (el, lst, pg, comp) => {
  lst = await getConvertTextToVariable(lst);
  comp = await getConvertTextToVariable(comp);
  const lstElement = await page(pg)[comp].item(lst);
  await lstElement.click();
  await page(pg)[comp].getItemList(el).click();
  const itemElement = await page(pg)[comp].getItemList(el);
  await itemElement.waitForDisplayed();
  await itemElement.click();
};

const setValueInElement = async (text, el, pg, comp) => {
  el = await getConvertTextToVariable(el);
  comp = await getConvertTextToVariable(comp);
  await page(pg)[comp].item(el).setValue(text);
};

module.exports = {
  getConvertTextToVariable,
  selectItemInList,
  setValueInElement,
};
