const BaseComponent = require('../common/base.component');

class ClientCardComponent extends BaseComponent {
  constructor(number) {
    super(`//tbody/tr/td[6][text()='${number}']/ancestor::tr`);
  }

  item(name) {
    const selectors = {
      id: 'td[aria-label$=\'ID\']',
      name: 'td[aria-label$=\'Name\']',
      nameLink: 'td[aria-label$=\'Name\'] span',
      gender: 'td[aria-label$=\'Gender\']',
      bloodGroup: 'td[aria-label$=\'Blood Group\']',
      symptoms: 'td[aria-label$=\'Symptoms\']',
      mobileNumber: 'td[aria-label$=\'Mobile Number\']',
      email: 'td[aria-label$=\'Email\']',
    };
    return this.rootEl.$(selectors[name]);
  }
}

module.exports = ClientCardComponent;

