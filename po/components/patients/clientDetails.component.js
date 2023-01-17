const BaseComponent = require('../common/base.component');

class ClientDetailsComponent extends BaseComponent {
  constructor() {
    super(`div.e-edit-dialog`);
  }

  item(name) {
    const selectors = {
      title: '//*[@id=\'grid_1627125836_0_dialogEdit_wrapper_title\']',
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
