const BaseComponent = require('../common/base.component');

class ListHeaderComponent extends BaseComponent {
  constructor() {
    super('.specialization-types');
  }

  item(name) {
    const selectors = {
      addNewDoctor: 'button.e-control',
    };
    return this.rootEl.$(selectors[name]);
  }
}

module.exports = ListHeaderComponent;
