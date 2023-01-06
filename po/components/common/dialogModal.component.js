const BaseComponent = require('./base.component');

class DialogModalComponent extends BaseComponent {
  constructor() {
    super('ejs-dialog');
  }

  get title() {
    return this.rootEl.$('#_title');
  }

  get close() {
    return this.rootEl.$('.e-dlg-closeicon-btn');
  }

  get cancel() {
    return this.rootEl.$('.button-container button.e-btn:not(.e-primary)');
  }

  get save() {
    return this.rootEl.$('.button-container button.e-primary');
  }
}

module.exports = DialogModalComponent;
