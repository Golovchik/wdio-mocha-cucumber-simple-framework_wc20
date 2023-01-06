const BaseComponent = require('../common/base.component');

class TodaysAppointmentsComponent extends BaseComponent {
  constructor() {
    super('.grid-container');
  }

  item(name) {
    const selectors = {
      bookAppointmentsLink: `[href="#/calendar"]`,
    };
    return this.rootEl.$(selectors[name]);
  }
}

module.exports = TodaysAppointmentsComponent;
