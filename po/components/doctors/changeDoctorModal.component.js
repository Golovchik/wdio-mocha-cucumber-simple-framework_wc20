const DialogModalComponent = require('../common/dialogModal.component');

class ChangeDoctorModalComponent extends DialogModalComponent {
  constructor() {
    super('ejs-dialog.new-doctor-dialog');
  }

  input(name) {
    const selectors = {
      name: '#Name input',
      phone: 'input#DoctorMobile',
      email: 'input[name="Email"]',
      education: 'input[name="Education"]',
      designation: 'input[name="Designation"]',
    };

    return this.rootEl.$(selectors[name.toLowerCase()]);
  }
}

module.exports = ChangeDoctorModalComponent;
