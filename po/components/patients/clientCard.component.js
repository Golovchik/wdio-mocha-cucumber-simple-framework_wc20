const BaseComponent = require('../common/base.component');

class ClientCardComponent extends BaseComponent {
  constructor(id) {
    super(`//tbody/tr[@aria-rowindex='${id}']`);
  }

  get nameLink() {
    return this.rootEl.$('.patient-name');
  }

  getItem(field) {
    return this.rootEl.$(`td[aria-label$='${field}']`);
  }
}

module.exports = ClientCardComponent;
