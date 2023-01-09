const {pageFactory} = require('../../po/pages/index');

const {getConvertTextToVariable} = require('../helpers');

const clickElementWithWait = async (element) => {
  await element.waitForClickable({timeout: 5000});
  await element.click();
};

const getElement = async (element, page, component) => {
  element = await getConvertTextToVariable(element);
  component = await getConvertTextToVariable(component);
  const currentComponent = await getComponent(page, component);
  const currentElement = await currentComponent.item(element);
  return currentElement;
};

const getComponent = async (page, component) => {
  component = await getConvertTextToVariable(component);
  const currentComponent = await pageFactory(page)[component];
  return currentComponent;
};

const getPage = async (page) => {
  const currentPage = await pageFactory(page);
  return currentPage;
};

const selectItemInList = async (element, lst, page, component) => {
  lst = await getConvertTextToVariable(lst);
  component = await getConvertTextToVariable(component);
  const currentComponent = await pageFactory(page)[component];
  const lstElement = await currentComponent.item(lst);
  await clickElementWithWait(lstElement);
  const itemElement = await currentComponent.getItemList(element);
  await clickElementWithWait(itemElement);
};

const setValueInElement = async (text, element, page, component) => {
  element = await getConvertTextToVariable(element);
  component = await getConvertTextToVariable(component);
  await pageFactory(page)[component].item(element).setValue(text);
};

module.exports = {
  getConvertTextToVariable,
  clickElementWithWait,
  getElement,
  getComponent,
  getPage,
  selectItemInList,
  setValueInElement,
};
