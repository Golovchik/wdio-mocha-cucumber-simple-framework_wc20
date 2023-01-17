const {Then, When} = require('@cucumber/cucumber');
const {pageFactory} = require('../po/pages/index');
const {getConvertTextToVariable} = require('../support/helpers');
const {checkElementIsDisplayed} = require('../support/assertions/expects');
const {
  getComponent,
  clickElementWithWait,
} = require('../support/actions/cooperations');

Then(
    /^I should see for doctors '([^"]*)' into elements '([^"]*)' on page '([^"]*)' on component '([^"]*)'$/,
    async (text, element, page, component) => {
      element = await getConvertTextToVariable(element);
      const currentElement = await pageFactory(page)
          .specialistCard(text)
          .item(element);
      await checkElementIsDisplayed(currentElement);
    },
);

When(
    /^I click on '([^"]*)' with name '([^"]*)' on page '([^"]*)'$/,
    async (element, text, page) => {
      element = getConvertTextToVariable(element);
      const currentElement = pageFactory(page).specialistCard(text);
      await clickElementWithWait(currentElement.rootEl);
    },
);

Then(
    /^I should see that element '([^"]*)' with text '([^"]*)' on page '([^"]*)' on component '([^"]*)'$/,
    async (element, text, page, component) => {
      const detail = element.toLowerCase(); // title
      const currentPage = pageFactory(page); // pageFactory("Doctors".toLowerCase()) -> DoctorsPageComponent
      const pageComponentName = getConvertTextToVariable(component); // specialistDetails
      const pageComponent = currentPage[pageComponentName]; // doctorPage.specialistDetails
      const pageTitle = await pageComponent.item(detail).getText();
      await expect(pageTitle).toEqual(text);
    },
);

When(
    /^I click on the button '([^"]*)' on page '([^"]*)' on component '([^"]*)'$/,
    async (element, page, component) => {
      const buttonText = element.toLowerCase();
      const currentPage = pageFactory(page);
      const pageComponentName = getConvertTextToVariable(component);
      const pageComponent = currentPage[pageComponentName];
      const button = pageComponent.item(buttonText);
      await clickElementWithWait(button);
    },
);

Then(
    /^I should see modal dialog with '([^"]*)' with text '([^"]*)' on page '([^"]*)' on component '([^"]*)'$/,
    async (element, text, page, component) => {
      element = getConvertTextToVariable(element); // title
      const currentComponent = await getComponent(page, component);
      const currentElement = currentComponent.item(element);
      const currenTitle = await currentElement.getText(); // Edit Doctor
      await expect(currenTitle).toEqual(text);
    },
);

When(
    /^I click on this '([^"]*)' on page '([^"]*)' on component '([^"]*)'$/,
    async (element, page, component) => {
      const pageComponent = await getConvertTextToVariable(component);
      const currentPage = await pageFactory(page);
      const currComponent = await currentPage[pageComponent];
      await clickElementWithWait(currComponent.item(element));
    },
);

Then(
    /^I should see this '([^"]*)' on page '([^"]*)' on component '([^"]*)'$/,
    async (element, page, component) => {
      element = getConvertTextToVariable(element);
      const currentComponent = await getComponent(page, component);
      const currentElement = currentComponent.item(element);
      await checkElementIsDisplayed(currentElement);
    },
);

Then(
    /^I should not see doctor with name '([^"]*)' on page '([^"]*)' on component '([^"]*)'$/,
    async (name, page, component) => {
      const componentName = getConvertTextToVariable(component);
      const {rootEl: doctor} = pageFactory(page)[componentName](name);
      await checkElementIsDisplayed(doctor, false);
    },
);
