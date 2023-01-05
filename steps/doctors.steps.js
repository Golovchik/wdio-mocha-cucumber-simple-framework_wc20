const {Then} = require('@cucumber/cucumber');
const {page} = require('../po/pages/index');
const {getConvertTextToVariable} = require('../support/helpers');

// Then I should see 'Uladzislau' into elements 'Name' on page 'Doctors' on component 'Specialist Card'
Then(
    /^I should see '([^"]*)' into elements '([^"]*)' on page '([^"]*)' on component '([^"]*)'$/,
    async (text, el, pg, comp) => {
      el = await getConvertTextToVariable(el);
      comp = await getConvertTextToVariable(comp);
      const currentElement = await page(pg).specialistCard(text).item(el);
      await expect(currentElement).toBeDisplayed();
    },
);
