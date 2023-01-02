const BaseComponent = require('../common/base.component');

class ClientDetailsComponent extends BaseComponent {
  constructor() {
    super(`div.e-edit-dialog`);
  }

  get closeBtn() {
    return this.rootEl.$('.e-dlg-closeicon-btn');
  }

  get deleteBtn() {
    return this.rootEl.$('button.delete-patient');
  }

  get editBtn() {
    return this.rootEl.$('button.edit-patient');
  }

  item(field) {
    const selectors = {
      id: '.#Id',
      name: '#Name',
      gender: '#Gender',
      dob: '#DOB',
      bloodGroup: '#BloodGroup',
      mobile: '#Mobile',
      email: '#Email',
      symptoms: '#Symptoms',
    };
    return this.rootEl.$(`span${selectors[field]}`);
  }

  async clickButton(button) {
    if (button.toLocaleLowerCase() === 'edit') {
      await this.editBtn.click();
    } else if (button.toLocaleLowerCase() === 'delete') {
      await this.deleteBtn.click();
    } else {
      await this.closeBtn.click();
    }
  }
}

module.exports = ClientDetailsComponent;
