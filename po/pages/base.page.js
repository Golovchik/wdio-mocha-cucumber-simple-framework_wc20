const HeaderComponent = require('../components/common/header.component');
const SideMenuComponent = require('../components/common/sideMenu.component');

class BasePage {
  constructor(url) {
    this.url = url;
    this.header = new HeaderComponent();
    this.sideMenu = new SideMenuComponent();
  }

  async open() {
    return browser.url(this.url);
  }

  async getPageUrl() {
    return browser.getUrl();
  }
}

module.exports = BasePage;
