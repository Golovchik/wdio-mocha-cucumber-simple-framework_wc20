const {Given, When, Then} = require('@cucumber/cucumber');
const {
  getElement,
  //  getComponent,
  getPage,
  clickElementWithWait,
  selectItemInList,
  setValueInElement,
} = require('../support/actions/cooperations');
const {checkElementIsDisplayed} = require('../support/assertions/expects');

// Given/When I open the browser is at the "Dashboard" page
Given(/^I open the browser is at the '([^"]*)' page$/, async (page) => {
  const currentPage = await getPage(page);
  await currentPage.open();
});

// When I click on the "menuItem" item in the menu
When(/^I click on the '([^"]*)' item in the menu$/, async (element) => {
  const currentElement = await getElement(element, 'Base', 'sideMenu');
  await clickElementWithWait(currentElement);
});

// When I click on the element 'el' on page 'pa' on component 'co'
When(
    /^I click on the element '([^"]*)' on page '([^"]*)' on component '([^"]*)'$/,
    async (element, page, component) => {
      const currentElement = await getElement(element, page, component);
      await clickElementWithWait(currentElement);
    },
);

// When I enter 'Uladzislau' into element 'Name' on page 'Doctors' on component 'newDoctorModal'
When(
    /^I enter '([^"]*)' into element '([^"]*)' on page '([^"]*)' on component '([^"]*)'$/,
    async (text, element, page, component) => {
      await setValueInElement(text, element, page, component);
    },
);

// When I click on '5+ years' element in 'Experience' list on page 'Doctors' on component 'New Doctor Modal'
When(
    /^I click on '([^"]+)' element in '([^"]+)' list on page '([^"]*)' on component '([^"]*)'$/,
    async (element, lst, page, component) => {
      await selectItemInList(element, lst, page, component);
    },
);

// Then I should have page url "pageUrl"
Then(/^I should have page url '([^"]*)'$/, async (url) => {
  const currentPage = await getPage('Base');
  const currentUrl = await currentPage.getPageUrl();
  await expect(currentUrl).toEqual(url);
});

// Then I should see modal dialog with title 'New Doctor' on page 'Doctors/Patients' on component 'New Doctor Modal'
Then(
    /^I should see modal dialog with title '([^"]*)' on page '([^"]*)' on component '([^"]*)'$/,
    async (title, page, component) => {
      const currentElement = await getElement('title', page, component);
      const currenTitle = await currentElement.getText();
      await expect(currenTitle).toEqual(title);
    },
);

// Then I should see element 'Name' on page 'Doctors' on component 'Specialist Card'
Then(
    /^I should see element '([^"]*)' on page '([^"]*)' on component '([^"]*)'$/,
    async (element, page, component) => {
      const currentElement = await getElement(element, page, component);
      await checkElementIsDisplayed(currentElement);
    },
);
