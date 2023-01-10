const BaseComponent = require('../common/base.component');

class SpecialistCardComponent extends BaseComponent {
  constructor(name) {
    super(
        `app-doctor-details`,
    );
  }

  item(name) {
    const selectors = {
      name: '.name',
      education: '.education',
    };
    return this.rootEl.$(selectors[name]);
  }
}

module.exports = SpecialistCardComponent;
