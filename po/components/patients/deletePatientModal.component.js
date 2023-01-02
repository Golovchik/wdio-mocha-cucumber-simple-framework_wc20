const DialogModalComponent = require('../common/dialogModal.component');

class DeletePatientModalComponent extends DialogModalComponent {
  constructor() {
    super(`ejs-dialog[header='Patient  Details']`);
  }
}

module.exports = DeletePatientModalComponent;
