const BaseComponent = require('../common/base.component');

class SettingsComponent extends BaseComponent {
  constructor(id) {
    super(`.preference-container`);
  }

  input(name) {
    const selectors = {
      currentView: '#CurrentView',
      calendarStart: '#CalendarStart',
      calendarEnd: '#CalendarEnd',
      duration: '#Duration',
      bookingColor: '#BookingColor',
      firstDayOfWeek: '#FirstDayOfWeek',
    };

    return this.rootEl.$(`${selectors[name.toLowerCase()]} span`);
  }
}

module.exports = SettingsComponent;
