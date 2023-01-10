const BaseComponent = require('../common/base.component');

class SettingsComponent extends BaseComponent {
  constructor(id) {
    super(`.preference-container`);
  }

  item(name) {
    const selectors = {
      currentView: '#CurrentView span',
      calendarStart: '#CalendarStart span',
      calendarEnd: '#CalendarEnd span',
      duration: '#Duration span',
      bookingColor: '#BookingColor span',
      firstDayOfWeek: '#FirstDayOfWeek span',

      currentViewInput: '#CurrentView input',
      calendarStartInput: '#CalendarStart input',
      calendarEndInput: '#CalendarEnd input',
      durationInput: '#Duration input',
      bookingColorInput: '#BookingColor input',
      firstDayOfWeekInput: '#FirstDayOfWeek input',
    };

    return this.rootEl.$(`${selectors[name]}`);
  }
}

module.exports = SettingsComponent;
