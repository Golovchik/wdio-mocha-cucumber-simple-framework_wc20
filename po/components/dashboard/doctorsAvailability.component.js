const BaseComponent = require('../common/base.component');

class DoctorsAvailabilityComponent extends BaseComponent {
  constructor() {
    super('.doctor-availability');
  }

  item(name) {
    const selectors = {
      viewAllLink: 'a[href=\'#/doctors\']',
    };
    return this.rootEl.$(selectors[name]);
  }
}

module.exports = DoctorsAvailabilityComponent;
