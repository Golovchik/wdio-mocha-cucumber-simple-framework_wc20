const BaseComponent = require('../common/base.component');

class SpecialistDetailsComponent extends BaseComponent {
  constructor() {
    super('app-doctor-details');
  }

  getBreakHours(day) {
    return this.rootEl.$(`//div[text()='${day}']/following-sibling::div`);
  }

  item(name) {
    const selectors = {
      delete: 'button.delete-details',
      edit: 'button.edit-details',
      addBreakHours: '.add-container button.e-primary',
      name: '.name',
      education: '.education',
      designation: '.designation',
      specialization: '.specialization',
      experience: '.experience',
      availability: '.available-days',
      mobile: '.mobile',
      title: 'div.title',
    };
    return this.rootEl.$(selectors[name]);
  }
}

module.exports = SpecialistDetailsComponent;
