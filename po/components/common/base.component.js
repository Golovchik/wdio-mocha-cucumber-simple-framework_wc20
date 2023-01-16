class BaseComponent {
  constructor(rootSelector) {
    this.rootSelector = rootSelector;
  }

  get rootEl() {
    return $(this.rootSelector);
  }

  getItemList(name) {
    return $(`//li[text()='${name}']`);
  }
}

module.exports = BaseComponent;
