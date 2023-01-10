const DialogModalComponent = require('../common/dialogModal.component');

class ChangeDoctorModalComponent extends DialogModalComponent {
  constructor() {
    super('ejs-dialog.new-doctor-dialog');
  }

  item(name) {
    const selectors = {
      title: this.title,
      close: this.close,
      cancel: this.cancel,
      save: this.save,
      name: '#Name input',
      genderMale: 'label[for=patientCheckMale]',
      genderFemale: 'label[for=patientCheckFemale]',
      phone: 'input#DoctorMobile',
      email: 'input[name="Email"]',
      education: 'input[name="Education"]',
      experience: 'div[aria-owns="Experience_options"]',
      designation: 'input[name="Designation"]',
    };

    return this.rootEl.$(selectors[name]);
  }
}

module.exports = ChangeDoctorModalComponent;
