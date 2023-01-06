const { Given, When, Then } = require("@cucumber/cucumber");
const { page } = require("../po/pages/index");

// Given/When I open the browser is at the "Dashboard" page
Given(/^I open the browser is at the '([^"]*)' page$/, async (pageName) => {
  await page(pageName).open();
});

// When I click on the "menuItem" item in the menu
When(/^I click on the '([^"]*)' item in the menu$/, async (menuItem) => {
  await page("Base").sideMenu.item(menuItem).click();
});

// When I click on the element 'el' on page 'pa' on component 'co'
When(
  /^I click on the element '([^"]*)' on page '([^"]*)' on component '([^"]*)'$/,
  async (el, pg, comp) => {
    await page(pg)[comp].item(el).click();
  }
);

// Then I should have page url "pageUrl"
Then(/^I should have page url '([^"]*)'$/, async (url) => {
  const currentUrl = await page("Base").getPageUrl();
  await expect(currentUrl).toEqual(url);
});

// Then I should see modal dialog with title 'New Doctor' on page 'Doctors'
Then(
  /^I should see modal dialog with title '([^"]*)' on page '([^"]*)'$/,
  async (title, pageName) => {
    const currenTitle = await page(pageName).newDoctorModal.title.getText();
    await expect(currenTitle).toEqual(title);
  }
);

// When I write text on element
When(/^I write text '([^"]*)' on element'([^"]*)'$/, async (text, element) => {
  await element.waitForExist(3000);
  await element.addValue(text);
});

//When I write text and push Enther button
When(
  /^I write text '([^"]*)' on element'([^"]*)'$ and push Enter button/,
  async (element, text) => {
    await element.waitForExist(3000);
    await element.addValue(text);
    await element.keys("\uE007");
  }
);

//When I click on element
When(/^I click on element '([^"]*)'$/, async (element) => {
  await element.waitForExist(3000);
  await element.click();
});

//When I select element on droplist
When(
  /^I select element '([^"]*)'$ on droplist '([^"]*)'$/,
  async (droplist, element) => {
    await droplist.waitForExist(3000);
    await droplist.click();
    await element.waitForExist(3000);
    await element.click();
  }
);

//Then I shoud see element  on component
Then(
  /^Then I shoud see element '([^"]*)' on component '([^"]*)'$/,
  async (element, text) => {
    await element.waitForExist(3000);
    await expect(element).toHaveTextContaining(text);
  }
);
