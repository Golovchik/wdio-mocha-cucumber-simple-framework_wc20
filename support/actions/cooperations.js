const {page} = require('../../po/pages/index');

const {getConvertTextToVariable} = require('../helpers');

const clickElementWithWait = async (element) => {
  await element.waitForClickable({timeout: 5000});
  await element.click();
};

const selectItemInList = async (el, lst, pg, comp) => {
  lst = await getConvertTextToVariable(lst);
  comp = await getConvertTextToVariable(comp);
  const currentComponent = await page(pg)[comp];
  const lstElement = await currentComponent.item(lst);
  await clickElementWithWait(lstElement);
  const itemElement = await currentComponent.getItemList(el);
  await clickElementWithWait(itemElement);
};

const setValueInElement = async (text, el, pg, comp) => {
  el = await getConvertTextToVariable(el);
  comp = await getConvertTextToVariable(comp);
  await page(pg)[comp].item(el).setValue(text);
};

module.exports = {
  clickElementWithWait,
  getConvertTextToVariable,
  selectItemInList,
  setValueInElement,
};
