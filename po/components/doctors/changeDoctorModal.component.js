const DialogModalComponent = require('../common/dialogModal.component');

class ChangeDoctorModalComponent extends DialogModalComponent {
  constructor() {
    super('ejs-dialog.new-doctor-dialog');
  }

  item(name) {
    const selectors = {
      name: '#Name input',
      genderMale: 'label[for=patientCheckMale]',
      genderFemale: 'label[for=patientCheckFemale]',
      phone: 'input#DoctorMobile',
      email: 'input[name="Email"]',
      education: 'input[name="Education"]',
      // experience: 'select[name="Experience"]',
      experience: 'div[aria-owns="Experience_options"]',
      designation: 'input[name="Designation"]',
    };

    return this.rootEl.$(selectors[name]);
  }
}

module.exports = ChangeDoctorModalComponent;
