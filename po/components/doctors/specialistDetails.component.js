const BaseComponent = require('../common/base.component');

class SpecialistDetailsComponent extends BaseComponent {
  constructor() {
    super('app-doctor-details');
  }

  get deleteBtn() {
    return this.rootEl.$('button.delete-details');
  }

  get editBtn() {
    return this.rootEl.$('button.edit-details');
  }

  get addBreakHoursBtn() {
    return this.rootEl.$('.add-container button.e-primary');
  }

  getBreakHours(day) {
    return this.rootEl.$(`//div[text()='${day}']/following-sibling::div`);
  }

  info(name) {
    const selectors = {
      name: '.name',
      education: '.education',
      designation: '.designation',
      specialization: '.specialization',
      experience: '.experience',
      availability: '.available-days',
      mobile: '.mobile',
    };
    return this.rootEl.$(selectors[name.toLowerCase()]);
  }
}

module.exports = SpecialistDetailsComponent;
