const {Given, When, Then} = require('@cucumber/cucumber');
const {page} = require('../po/pages/index');
const {
  getConvertTextToVariable,
  selectItemInList,
  setValueInElement,
} = require('../support/helper');

// Given/When I open the browser is at the "Dashboard" page
Given(/^I open the browser is at the '([^"]*)' page$/, async (pg) => {
  await page(pg).open();
});

// When I click on the "menuItem" item in the menu
When(/^I click on the '([^"]*)' item in the menu$/, async (el) => {
  el = await getConvertTextToVariable(el);
  await page('Base').sideMenu.item(el).click();
});

// When  I click button 'Save' on page 'Doctors' on component 'New Doctor Modal'
When(
    /^I click button '([^"]*)' on page '([^"]*)' on component '([^"]*)'$/,
    async (el, pg, comp) => {
      el = await getConvertTextToVariable(el);
      comp = await getConvertTextToVariable(comp);
      await page(pg)[comp][el].click();
    },
);
// When I click on the element 'el' on page 'pa' on component 'co'
When(
    /^I click on the element '([^"]*)' on page '([^"]*)' on component '([^"]*)'$/,
    async (el, pg, comp) => {
      el = await getConvertTextToVariable(el);
      comp = await getConvertTextToVariable(comp);
      await page(pg)[comp].item(el).click();
    },
);

// When I enter 'Uladzislau' into element 'Name' on page 'Doctors' on component 'newDoctorModal'
When(
    /^I enter '([^"]*)' into element '([^"]*)' on page '([^"]*)' on component '([^"]*)'$/,
    async (text, el, pg, comp) => {
      await setValueInElement(text, el, pg, comp);
    },
);

// When I click on '5+ years' element in 'Experience' list on page 'Doctors' on component 'New Doctor Modal'
When(
    /^I click on '([^"]+)' element in '([^"]+)' list on page '([^"]*)' on component '([^"]*)'$/,
    async (el, lst, pg, comp) => {
      await selectItemInList(el, lst, pg, comp);
    },
);

// Then I should have page url "pageUrl"
Then(/^I should have page url '([^"]*)'$/, async (url) => {
  const currentUrl = await page('Base').getPageUrl();
  await expect(currentUrl).toEqual(url);
});

// Then I should see modal dialog with title 'New Doctor' on page 'Doctors' on component 'New Doctor Modal'
Then(
    /^I should see modal dialog with title '([^"]*)' on page '([^"]*)' on component '([^"]*)'$/,
    async (title, pg, comp) => {
      comp = await getConvertTextToVariable(comp);
      const currenTitle = await page(pg)[comp].title.getText();
      await expect(currenTitle).toEqual(title);
    },
);
