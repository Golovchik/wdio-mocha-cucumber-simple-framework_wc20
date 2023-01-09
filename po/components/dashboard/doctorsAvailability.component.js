const BaseComponent = require('../common/base.component');

class DoctorsAvailabilityComponent extends BaseComponent {
  constructor() {
    super('.doctor-availability');
  }

  getDoctorByName(name) {
    return this.rootEl.$(`//span[text() = '${name}']`);
  }

  item(name) {
    const selectors = {
      viewAllLink: 'a[href=\'#/doctors\']',
      listviewTemplate: '#listview_template',
    };
    return this.rootEl.$(selectors[name]);
  }
}

module.exports = DoctorsAvailabilityComponent;
