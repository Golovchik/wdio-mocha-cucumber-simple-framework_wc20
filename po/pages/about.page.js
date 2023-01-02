/* eslint-disable max-len */
const BasePage = require('./base.page');
const ListComponentsComponent = require('../components/about/listComponents.component');

class AboutPage extends BasePage {
  constructor(url) {
    super('/showcase/angular/appointmentplanner/#/about');
    this.listComponents = new ListComponentsComponent();
  }
}

module.exports = AboutPage;
