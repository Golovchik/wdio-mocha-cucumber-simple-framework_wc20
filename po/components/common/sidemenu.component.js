const BaseComponent = require('./base.component');

class SideMenuComponent extends BaseComponent {
  constructor() {
    super('#plannerSiderBar');
  }

  get name() {
    return this.rootEl.$('p.name');
  }

  get userType() {
    return this.rootEl.$('p.user-type');
  }

  item(name) {
    const selectors = {
      dashboard: '.dashboard',
      schedule: '.calendar',
    };
    return this.rootEl.$(selectors[name.toLowerCase()]);
  }
}

module.exports = SideMenuComponent;
