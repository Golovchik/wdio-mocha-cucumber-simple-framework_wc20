const BaseComponent = require('../common/base.component');

class TodaysAppointmentsComponent extends BaseComponent {
  constructor() {
    super('.grid-container');
  }

  get bookAppointmentsLink() {
    return this.rootEl.$(`[href="#/calendar"]`);
  }
}

module.exports = TodaysAppointmentsComponent;
