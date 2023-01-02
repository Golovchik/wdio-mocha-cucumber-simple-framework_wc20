const HeaderComponent = require("../components/common/header.component");
const SideMenuComponent = require("../components/common/sidemenu.component");

class BasePage {
  constructor(url) {
    this.url = url;
    this.header = new HeaderComponent();
    this.sideMenu = new SideMenuComponent();
  }

  async open() {
    await browser.url(this.url);
  }

  async getPageUrl() {
    await browser.getUrl();
  }
}

module.exports = BasePage;
