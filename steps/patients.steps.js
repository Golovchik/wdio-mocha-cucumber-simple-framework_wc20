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

// Then I should see for patients 'Ul' into elements 'Name' on page 'Patients' on component 'Client Card'
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