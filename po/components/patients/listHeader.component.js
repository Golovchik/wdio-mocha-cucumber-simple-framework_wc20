const BaseComponent = require('../common/base.component');

class ListHeaderComponent extends BaseComponent {
  constructor() {
    super('.patient-operations');
  }

  item(name) {
    const selectors = {
      addNewPatient: '//*[text()="Add New Patient"]',
      searchPatient: '#schedule_searchbar',
    };
    return this.rootEl.$(selectors[name]);
  }
}

module.exports = ListHeaderComponent;
