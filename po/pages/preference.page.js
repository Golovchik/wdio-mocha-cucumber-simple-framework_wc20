/* eslint-disable max-len */
const BasePage = require('./base.page');
const SettingsComponent = require('../components/preference/settings.component');

class PreferencePage extends BasePage {
  constructor(url) {
    super('/showcase/angular/appointmentplanner/#/preference');
    this.settings = new SettingsComponent();
  }
}

module.exports = PreferencePage;
