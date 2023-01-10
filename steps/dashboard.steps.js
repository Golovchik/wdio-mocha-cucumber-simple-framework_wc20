const { Then } = require("@cucumber/cucumber");
const { getComponent } = require("../support/actions/cooperations");
const { checkElementIsDisplayed } = require("../support/assertions/expects");

// Then I should see availability doctor with name '' on page Dashboard on component 'Doctors Availability'
Then(
  /^I should see availability doctor with name '([^"]*)' on page Dashboard on component '([^"]*)'$/,
  async (text, component) => {
    const currentComponent = await getComponent("Dashboard", component);
    const currentElement = await currentComponent.getDoctorByName(text);
    const listviewTemplateElement = currentComponent.item("listviewTemplate");
    await listviewTemplateElement.scrollIntoView();
    await checkElementIsDisplayed(currentElement);
  }
);
