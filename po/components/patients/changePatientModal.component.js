const DialogModalComponent = require('../common/dialogModal.component');

class ChangePatientModalComponent extends DialogModalComponent {
  constructor() {
    super(`ejs-dialog.new-patient-dialog`);
  }

  input(name) {
    const selectors = {
      name: 'input[name=Name]',
      genderMale: 'input[value=Male]',
      genderFemale: 'input[value=Female]',
      dob: '.e-date-icon',
      bloodGroup: '#.e-ddl-icon',
      mobile: '#PatientMobile',
      email: 'input[name=Email]',
      symptoms: 'input[name=Symptoms]',
    };

    return this.rootEl.$(selectors[name.toLowerCase()]);
  }
}

module.exports = ChangePatientModalComponent;
