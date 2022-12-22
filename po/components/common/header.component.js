const BaseComponent = require('./base.component');

class HeaderComponent extends BaseComponent {
  constructor() {
    super('.planner-header');
  }

  get logoutBtn() {
    return this.rootEl.$('.logout-container');
  }

  get githubBtn() {
    return this.rootEl.$('#github');
  }
}

module.exports = HeaderComponent;
