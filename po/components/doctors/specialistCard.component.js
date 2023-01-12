const BaseComponent = require('../common/base.component');

class SpecialistCardComponent extends BaseComponent {
  constructor(name) {
    super(
        `//div[@class='name'][text()='${name}']//ancestor::div[@class='e-cards specialist-item']`,
    );
  }

  item(name) {
    const selectors = {
      name: '.name',
      education: '.education',
    };
    return this.rootEl.$(selectors[name]);
  }
}

module.exports = SpecialistCardComponent;
