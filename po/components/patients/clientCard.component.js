const BaseComponent = require('../common/base.component');

class ClientCardComponent extends BaseComponent {
  constructor(id) {
    super(`//tbody/tr/td[text()='${id}']`);
  }

  item(name) {
    const selectors = {
      id: 'ID',
      name: 'Name',
      gender: 'Gender',
      bloodGroup: 'Blood Group',
      symptoms: 'Symptoms',
      mobileNumber: 'Mobile Number',
      email: 'Email',
    };
    return this.rootEl.$(`td[aria-label$='${selectors[name]}']`);
  }
}

module.exports = ClientCardComponent;
