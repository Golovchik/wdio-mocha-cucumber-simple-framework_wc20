// const {info} = require('winston');
const DialogModalComponent = require('../common/dialogModal.component');

class DeleteDoctorModalComponent extends DialogModalComponent {
  constructor() {
    super(`ejs-dialog[header='Doctor Details']`);
  }
  item(name) {
    const selectors = {
      ok: '//*[text()=\'Ok\']',

    };
    return this.rootEl.$(selectors[name]);
  }
}

module.exports = DeleteDoctorModalComponent;
