/* eslint-disable max-len */
const BasePage = require('./base.page');
const BodyOfTableComponent = require('../components/schedule/bodyOfTable.component');
const HeaderOfTableComponent = require('../components/schedule/headerOfTable.component');

class SchedulePage extends BasePage {
  constructor() {
    super('/showcase/angular/appointmentplanner/#/calendar');
    this.bodyOfTable = new BodyOfTableComponent();
    this.headerOfTable = new HeaderOfTableComponent();
  }
}

module.exports = SchedulePage;
