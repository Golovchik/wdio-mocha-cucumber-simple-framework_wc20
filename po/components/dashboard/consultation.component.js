const BaseComponent = require('../common/base.component');

class ConsultationComponent extends BaseComponent {
  constructor() {
    super('.chart-container');
  }

  legendAriaLabel(value) {
    return this.rootEl.$(`//*[text()='${value}']`);
  }
}

module.exports = ConsultationComponent;
