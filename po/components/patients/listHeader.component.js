const BaseComponent = require('../common/base.component');

class ListHeaderComponent extends BaseComponent {
  constructor() {
    super('.patient-operations');
  }

  item(name) {
    const selectors = {
      addNewPatien: 'button.e-control',
    };
    return this.rootEl.$(selectors[name]);
  }
}

module.exports = ListHeaderComponent;
