const BaseComponent = require('../common/base.component');

class ListComponentsComponent extends BaseComponent {
  constructor() {
    super(`.about-component`);
  }

  item(name) {
    const newName = name[0].toUpperCase() + name.slice(1);
    return this.rootEl.$(`//a[text()='${newName}']`);
  }
}

module.exports = ListComponentsComponent;
