const BaseComponent = require('./base.component');

class SideMenuComponent extends BaseComponent {
  constructor() {
    super('#plannerSiderBar');
  }

  item(name) {
    const selectors = {
      name: 'p.name',
      dashboard: '.dashboard',
      schedule: '.calendar',
      doctors: '.doctors',
      patients: '.patients',
      preference: '.preference',
      about: '.about',
    };
    return this.rootEl.$(selectors[name]);
  }
}

module.exports = SideMenuComponent;
