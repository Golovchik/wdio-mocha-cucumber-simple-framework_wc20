const { Then } = require("@cucumber/cucumber");
const { pageFactory } = require("../po/pages/index");
const { getConvertTextToVariable } = require("../support/helpers");
const { checkElementIsDisplayed } = require("../support/assertions/expects");

// Then I should see for doctors 'Uladzislau' into elements 'Name' on page 'Doctors' on component 'Specialist Card'
Then(
  /^I should see for doctors '([^"]*)' into elements '([^"]*)' on page '([^"]*)' on component '([^"]*)'$/,
  async (text, element, page, component) => {
    element = await getConvertTextToVariable(element);
    const currentElement = await pageFactory(page)
      .specialistCard(text)
      .item(element);
    await checkElementIsDisplayed(currentElement);
  }
);
