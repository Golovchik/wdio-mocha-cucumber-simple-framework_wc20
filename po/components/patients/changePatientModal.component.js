const DialogModalComponent = require('../common/dialogModal.component');

class ChangePatientModalComponent extends DialogModalComponent {
  constructor() {
    super(`ejs-dialog.new-patient-dialog`);
  }

  item(name) {
    const selectors = {
      title: '#_title',
      close: this.close,
      cancel: this.cancel,
      save: this.save,
      newPatient: '//*[text()=\'New Patient\']',
      name: 'input[name=Name]',
      genderMale: '//label[text()="Male"]',
      genderFemale: '//label[text()="Female"]',
      dob: '.e-date-icon',
      bloodGroup: '.e-ddl-icon',
      mobile: '#PatientMobile',
      email: 'input[name=Email]',
      symptoms: 'input[name=Symptoms]',
    };
    return this.rootEl.$(selectors[name]);
  }
}

module.exports = ChangePatientModalComponent;
