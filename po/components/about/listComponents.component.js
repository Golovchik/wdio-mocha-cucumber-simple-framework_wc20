const BaseComponent = require('../common/base.component');

class ListComponentsComponent extends BaseComponent {
  constructor(id) {
    super(`.about-component`);
  }

  item(name) {
    return this.rootEl.$(`//a[text()='${name}`);
  }
}

module.exports = ListComponentsComponent;
