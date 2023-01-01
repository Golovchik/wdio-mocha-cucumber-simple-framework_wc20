const DialogModalComponent = require('../common/dialogModal.component');

class DeleteDoctorModalComponent extends DialogModalComponent {
  constructor() {
    super(`ejs-dialog[header='Doctor Details']`);
  }
}

module.exports = DeleteDoctorModalComponent;
