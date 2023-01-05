const BaseComponent = require('./base.component');

class HeaderComponent extends BaseComponent {
  constructor() {
    super('.planner-header');
  }

  item(name) {
    const selectors = {
      logout: '.logout-container',
      github: '#github',
    };
    return this.rootEl.$(selectors[name]);
  }
}

module.exports = HeaderComponent;
