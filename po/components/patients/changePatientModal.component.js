const DialogModalComponent = require('../common/dialogModal.component');

class ChangePatientModalComponent extends DialogModalComponent {
  constructor() {
    super(`ejs-dialog.new-patient-dialog`);
  }

  item(name) {
    const selectors = {
      title: this.title,
      close: this.close,
      cancel: this.cancel,
      save: this.save,
      name: 'input[name=Name]',
      genderMale: 'label[for=patientCheckMale]',
      genderFemale: 'label[for=patientCheckFemale]',
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
