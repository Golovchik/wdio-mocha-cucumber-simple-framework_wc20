/* eslint-disable max-len */
const {When, Then} = require('@cucumber/cucumber');
const {getConvertTextToVariable} = require('../support/helpers');
const {pageFactory} = require('../po/pages/index');
const {clickElementWithWait} = require('../support/actions/cooperations');
const {checkElementIsDisplayed} = require('../support/assertions/expects');

When(
    /^I click on the patient with mobile number '([^"]*)' on the element '([^"]*)' on page '([^"]*)' on component '([^"]*)'$/,
    async (text, element, page, component) => {
      this.patientMobile = text;
      element = await getConvertTextToVariable(element);
      const currentElement = await pageFactory(page)
          .clientCard(text)
          .item(element);
      await clickElementWithWait(currentElement);
    },
);

Then(
    /^I should see for patients '([^"]*)' into elements '([^"]*)' on page '([^"]*)' on component '([^"]*)'$/,
    async (text, element, page, component) => {
      element = await getConvertTextToVariable(element);
      const currentElement = await pageFactory(page)
          .clientCard(this.patientMobile)
          .item(element);
      await checkElementIsDisplayed(currentElement);
      const currentText = await currentElement.getText();
      await expect(currentText).toEqual(text);
    },
);

Then(
    /^I should see text '([^"]*)' into element '([^"]*)' and text '([^"]*)' on page '([^"]*)' on component '([^"]*)'$/,
    async (nameText, nameElement, mobileText, page, component) => {
      const funcName = await getConvertTextToVariable(component);
      const uniqueRowAncestor = await pageFactory(page.toLowerCase())[funcName](
          mobileText,
      );

      const nameLocatorText = await uniqueRowAncestor
          .item(nameElement.toLowerCase())
          .getText();
      await expect(nameLocatorText).toEqual(nameText);
    },
);

Then(
    /^I should see patients '([^"]*)' into elements '([^"]*)' on page '([^"]*)' on component '([^"]*)'$/,
    async (text, element, page, component) => {
      element = await getConvertTextToVariable(element);
      const currentElement = await pageFactory(page)
          .clientCard(this.name)
          .item(element);
      await checkElementIsDisplayed(currentElement);
      const currentText = await currentElement.getText();
      await expect(currentText).toEqual(text);
    },
);

Then(
    /^I should see patient with mobile number '([^"]*)' on the element '([^"]*)' on page '([^"]*)' on component '([^"]*)'$/,
    async (text, element, page, component) => {
      this.patientMobile = text;
      element = await getConvertTextToVariable(element);
      const currentElement = await pageFactory(page)
          .clientCard(text)
          .item(element);
      await clickElementWithWait(currentElement);
    },
);

When(
    /^I will click on this '([^"]*)' on page '([^"]*)' on component '([^"]*)'$/,
    async (element, page, component) => {
      const newElement = getConvertTextToVariable(element);
      const pageComponent = await getConvertTextToVariable(component);
      const currentPage = await pageFactory(page);
      const currComponent = await currentPage[pageComponent];
      const currentElement = currComponent.item(newElement);

      await clickElementWithWait(currentElement);
    },
);
