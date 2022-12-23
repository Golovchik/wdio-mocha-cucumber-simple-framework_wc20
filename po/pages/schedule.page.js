/* eslint-disable max-len */
const BasePage = require('./base.page');
const ChooseSpecialistComponent = require('../components/schedule/chooseSpecialist.component');
const FilterComponent = require('../components/schedule/filter.component');
const SlotComponent = require('../components/schedule/slot.component');
const WaitingListComponent = require('../components/schedule/waitingList.component');

class SchedulePage extends BasePage {
  constructor() {
    super('/showcase/angular/appointmentplanner/#/calendar');
    this.chooseSpecialist = new ChooseSpecialistComponent();
    this.filter = new FilterComponent();
    this.slot = new SlotComponent();
    this.waitingList = new WaitingListComponent();
  }
}

module.exports = SchedulePage;
