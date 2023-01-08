const {Then} = require('@cucumber/cucumber');
const {getElement} = require('../support/actions/cooperations');

Then(
    /^I should see text of preiod as '([^"]*)' into elements '([^"]*)' on page '([^"]*)' on component '([^"]*)'$/,
    async (text, element, page, component) => {
      const currentElement = await getElement(element, page, component);
      const currentText = await currentElement.getText();
      await expect(currentText).toEqual(text);
    },
);
