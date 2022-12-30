const BasePage = require("./base.page");

class DoctorPage extends BasePage {
  constructor(url) {
    super(url);
    this.doctorQueryPart = "//*[text()";
    this.addNewDoctorButton = "//*[@class='add-doctor-label']";
    this.selectSpecString = "//span[@aria-owns='Specialization_options']";
    this.specializationSelect = "//*[@id='Specialization_hidden']//option";
  }
  getDoctorInfoByName(name) {
    return this.rootEl.$(`${doctorQueryPart}='Dr. ${name}']`);
  }
  getSpecialization(spec) {
    return this.rootEl.$(`${specializationSelect}[@value=Ne'${spec}']`);
  }
}

module.exports = DoctorPage;
