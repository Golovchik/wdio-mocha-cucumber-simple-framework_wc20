const {Then} = require('@cucumber/cucumber');
const {getPage} = require('../support/actions/cooperations');

Then(/^I should have new page with url '([^"]*)'$/, async (url) => {
  await browser.pause(2000);
  await browser.switchWindow(url);
  const currentPage = await getPage('Base');
  const currentUrl = await currentPage.getPageUrl();
  await expect(currentUrl).toEqual(url);
});
