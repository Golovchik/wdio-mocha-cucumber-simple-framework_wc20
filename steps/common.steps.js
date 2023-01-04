const {Given, When, Then} = require('@cucumber/cucumber');
const {page} = require('../po/pages/index');

// Given/When I open the browser is at the "Dashboard" page
Given(/^I open the browser is at the '([^"]*)' page$/, async (pageName) => {
  await page(pageName).open();
});

// When I click on the "menuItem" item in the menu
When(/^I click on the '([^"]*)' item in the menu$/, async (menuItem) => {
  await page('Base').sideMenu.item(menuItem).click();
});

// Then I should have page url "pageUrl"
Then(/^I should have page url '([^"]*)'$/, async (url) => {
  const currentUrl = await page('Base').getPageUrl();
  await expect(currentUrl).toEqual(url);
});

// Then I should see modal dialog with title 'New Doctor' on page 'Doctors'
Then(
    /^I should see modal dialog with title '([^"]*)' on page '([^"]*)'$/,
    async (title, pageName) => {
      const currenTitle = await page(pageName).newDoctorModal.title.getText();
      await expect(currenTitle).toEqual(title);
    },
);
