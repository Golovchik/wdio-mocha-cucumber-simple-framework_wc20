const {Then} = require('@cucumber/cucumber');
const {pageFactory} = require('../po/pages/index');
const {getConvertTextToVariable} = require('../support/helpers');

// Then I should see 'Uladzislau' into elements 'Name' on page 'Doctors' on component 'Specialist Card'
Then(
    /^I should see '([^"]*)' into elements '([^"]*)' on page '([^"]*)' on component '([^"]*)'$/,
    async (text, element, page, component) => {
      element = await getConvertTextToVariable(element);
      component = await getConvertTextToVariable(component);
      const currentElement = await pageFactory(page).specialistCard(text).item(element);
      await expect(currentElement).toBeDisplayed();
    },
);
