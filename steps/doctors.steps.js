const { Then, When } = require("@cucumber/cucumber");
const { pageFactory } = require("../po/pages/index");
const { getConvertTextToVariable } = require("../support/helpers");
const { checkElementIsDisplayed } = require("../support/assertions/expects");
const {
  getComponent,
  getElement,
  clickElementWithWait,
} = require("../support/actions/cooperations");

// Then I should see for doctors 'Uladzislau' into elements 'Name' on page 'Doctors' on component 'Specialist Card'
// Then(
//   /^I should see for doctors '([^"]*)' into elements '([^"]*)' on page '([^"]*)' on component '([^"]*)'$/,
//   async (text, element, page, component) => {
//     element = await getConvertTextToVariable(element);
//     const currentElement = await pageFactory(page)
//       .specialistCard(text)
//       .item(element);
//     await checkElementIsDisplayed(currentElement);
//   }
// );

When(
  /^I click on '([^"]*)' with name '([^"]*)' on page '([^"]*)'$/,
  async (element, text, page) => {
    element = getConvertTextToVariable(element);
    const currentElement = pageFactory(page).specialistCard(text);
    await clickElementWithWait(currentElement.rootEl);
  }
);



Then(
  /^I should see element '([^"]*)' with text '([^"]*)' on page '([^"]*)' on component '([^"]*)'$/,
  async (element, text, page, component) => {
    const detail = element.toLowerCase(); //title
    const currentPage = pageFactory(page); //pageFactory("Doctors".toLowerCase()) -> DoctorsPageComponent
    const pageComponentName = getConvertTextToVariable(component); //specialistDetails
    const pageComponent = currentPage[pageComponentName]; //doctorPage.specialistDetails
    const pageTitle = await pageComponent.info(detail).getText();
    await expect(pageTitle).toEqual(text);
  }
);


//And I click on the button 'Edit' on page 'Doctors' on component 'Specialist Details'
When(
  /^I click on the button '([^"]*)' on page '([^"]*)' on component '([^"]*)'$/,
  async (element, page, component) => {
    const buttonText = element.toLowerCase();
    const currentPage = pageFactory(page);
    const pageComponentName = getConvertTextToVariable(component);
    const pageComponent = currentPage[pageComponentName];
    const button = pageComponent.info(buttonText);
    await clickElementWithWait(button);
  }
);

// Then I should see modal dialog with element 'Title' with text 'Edit Doctor' on page 'Doctors' on component 'Edit Doctor Modal'
Then(
  /^I should see modal dialog with element '([^"]*)' with text '([^"]*)' on page '([^"]*)' on component '([^"]*)'$/,
  async (title, text, page, component) => {
    const currentElement = await getElement(title, page, component);
    const currenTitle = await currentElement.getText(); //Edit Doctor
    await expect(currenTitle).toEqual(text);
  }
);

When(
  
  /^I click on the element '([^"]*)' on page '([^"]*)' on component '([^"]*)'$/,
  async (element, page, component) => {
    const pageComponent = await getConvertTextToVariable(component);
    const currentPage = await pageFactory(page);

    const currComponent = await currentPage[pageComponent];
    await clickElementWithWait(currComponent.info(element));
  }
);


//Then I should see element 'Title' on page 'Doctors' on component 'Specialist Details'
Then(
  /^I should see element '([^"]*)' on page '([^"]*)' on component '([^"]*)'$/,
  async (element, page, component) => {
    element = getConvertTextToVariable(element);
    const currentComponent = await getComponent(page, component);
    const currentElement = currentComponent.info(element);
    await checkElementIsDisplayed(currentElement);
  }
);



// Then I should not see element 'Specialist Card' with name 'Dr. Nembo Lukeni'  on page 'Doctors'
Then(
  /^I should (not )?see element '([^"]*)' with name '([^"]*)' on page '([^"]*)'$/,
  async (notPresent, element, text, pageName) => {
    notPresent ? isNotDisplayed() : isDisplayed();
  }
);