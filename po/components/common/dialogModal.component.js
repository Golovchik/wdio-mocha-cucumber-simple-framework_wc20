const BaseComponent = require('./base.component');

class DialogModalComponent extends BaseComponent {
  constructor(url) {
    super(url);
  }

  get title() {
    return '#_title';
  }

  get close() {
    return '.e-dlg-closeicon-btn';
  }

  get cancel() {
    return '.button-container button.e-btn:not(.e-primary)';
  }

  get save() {
    return '//*[text()="Save"]';
  }
}

module.exports = DialogModalComponent;
