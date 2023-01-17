const {pageFactory} = require('../../po/pages/index');

const {getConvertTextToVariable} = require('../helpers');

const clickElementWithWait = async (element) => {
  await element.waitForClickable({timeout: 5000});
  await element.click();
};
const doubleClickElementWithWait = async (element) => {
  await element.waitForClickable({timeout: 5000});
  await element.doubleClick();
};

const getElement = async (element, page, component) => {
  element = await getConvertTextToVariable(element);
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
  const currentComponent = await getComponent(page, component);
  const lstElement = await currentComponent.item(lst);
  await clickElementWithWait(lstElement);
  await browser.pause(1000);
  const itemElement = await currentComponent.getItemList(element);
  await clickElementWithWait(itemElement);
};

const setValueInElement = async (text, element, page, component) => {
  element = await getConvertTextToVariable(element);
  component = await getConvertTextToVariable(component);
  const currentElement = await getElement(element, page, component);
  await currentElement.setValue(text);
};

const getValueFromElement = async (element, page, component) => {
  element = await getConvertTextToVariable(element);
  component = await getConvertTextToVariable(component);
  const currentElement = await getElement(element, page, component);
  return currentElement.getValue();
};

module.exports = {
  getConvertTextToVariable,
  clickElementWithWait,
  doubleClickElementWithWait,
  getElement,
  getComponent,
  getPage,
  selectItemInList,
  setValueInElement,
  getValueFromElement,
};
