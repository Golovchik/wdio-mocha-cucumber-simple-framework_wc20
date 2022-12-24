const BaseComponent = require('../common/base.component');

class DoctorsAvailabilityComponent extends BaseComponent {
  constructor() {
    super('.doctor-availability');
  }

  get viewAllLink() {
    return this.rootEl.$(`a[href='#/doctors']`);
  }
}

module.exports = DoctorsAvailabilityComponent;
