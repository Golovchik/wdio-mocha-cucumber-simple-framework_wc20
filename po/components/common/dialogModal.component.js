const BaseComponent = require('./base.component');

class DialogModalComponent extends BaseComponent {
  constructor() {
    super('ejs-dialog');
  }

  get title() {
    return this.rootEl.$('#_title');
  }

  get closeBtn() {
    return this.rootEl.$('.e-dlg-closeicon-btn');
  }

  get cancelBtn() {
    return this.rootEl.$('.button-container button.e-btn:not(.e-primary)');
  }

  get saveBtn() {
    return this.rootEl.$('.button-container button.e-primary');
  }

  async clickButton(button) {
    if (button.toLocaleLowerCase() === 'save') {
      await this.saveBtn.click();
    } else if (button.toLocaleLowerCase() === 'cancel') {
      await this.cancelBtn.click();
    } else {
      await this.closeBtn.click();
    }
  }
}

module.exports = DialogModalComponent;
