const BaseComponent = require('../common/base.component');

class ClientDetailsComponent extends BaseComponent {
  constructor() {
    super(`div.e-edit-dialog`);
  }

  item(name) {
    const selectors = {
      title: 'div.e-dlg-header',
      close: '.e-dlg-closeicon-btn',
      delete: 'button.delete-patient',
      edit: 'button.edit-patient',
      id: 'span#Id',
      name: 'span#Name',
      gender: 'span#Gender',
      dob: 'span#DOB',
      bloodGroup: 'span#BloodGroup',
      mobile: 'span#Mobile',
      email: 'span#Email',
      symptoms: 'span#Symptoms',
    };
    return this.rootEl.$(selectors[name]);
  }
}

module.exports = ClientDetailsComponent;
