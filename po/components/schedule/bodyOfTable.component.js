const BaseComponent = require('../common/base.component');

class BodyOfTableComponent extends BaseComponent {
  constructor() {
    super('.e-table-container');
  }

  item(name) {
    const selectors = {
      previous: '.e-prev',
      next: '.e-next',
      dateRange: '.e-date-range',
      day: '.e-day',
      week: '.e-week',
      month: '.e-month',
      timelineDay: '.e-timeline-day',
      timelineWeek: '.e-timeline-week',
      timelineWorkWeek: '.e-timeline-work-week',
      timelineWorkMonth: '.e-timeline-work-month',
    };
    return this.rootEl.$(`.e-toolbar-item${selectors[name]}`);
  }
}

module.exports = BodyOfTableComponent;
