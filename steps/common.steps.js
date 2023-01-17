const {Given, When, Then} = require('@cucumber/cucumber');
const {
  getElement,
  getPage,
  clickElementWithWait,
  selectItemInList,
  setValueInElement,
  getValueFromElement,
} = require('../support/actions/cooperations');
const {checkElementIsDisplayed} = require('../support/assertions/expects');

Given(/^I open the browser is at the '([^"]*)' page$/, async (page) => {
  const currentPage = await getPage(page);
  await currentPage.open();
});

When(/^I click on the '([^"]*)' item in the menu$/, async (element) => {
  const currentElement = await getElement(element, 'Base', 'sideMenu');
  await clickElementWithWait(currentElement);
});

When(
    /^I click on the element '([^"]*)' on page '([^"]*)' on component '([^"]*)'$/,
    async (element, page, component) => {
      const currentElement = await getElement(element, page, component);
      await clickElementWithWait(currentElement);
    },
);

When(
    /^I enter '([^"]*)' into element '([^"]*)' on page '([^"]*)' on component '([^"]*)'$/,
    async (text, element, page, component) => {
      await setValueInElement(text, element, page, component);
    },
);

When(
    /^I click on '([^"]+)' element in '([^"]+)' list on page '([^"]*)' on component '([^"]*)'$/,
    async (element, lst, page, component) => {
      await selectItemInList(element, lst, page, component);
    },
);

Then(/^I should have page url '([^"]*)'$/, async (url) => {
  const currentPage = await getPage('Base');
  const currentUrl = await currentPage.getPageUrl();
  await expect(currentUrl).toEqual(url);
});

Then(
    /^I should see modal dialog with title '([^"]*)' on page '([^"]*)' on component '([^"]*)'$/,
    async (title, page, component) => {
      const currentElement = await getElement('title', page, component);
      const currenTitle = await currentElement.getText();
      await expect(currenTitle).toEqual(title);
    },
);

Then(
    /^I should see element '([^"]*)' on page '([^"]*)' on component '([^"]*)'$/,
    async (element, page, component) => {
      const currentElement = await getElement(element, page, component);
      await checkElementIsDisplayed(currentElement);
    },
);

Then(
    /^I should see text '([^"]*)' into elements '([^"]*)' on page '([^"]*)' on component '([^"]*)'$/,
    async (text, element, page, component) => {
      const currentText = await getValueFromElement(element, page, component);
      await expect(currentText).toEqual(text);
    },
);
