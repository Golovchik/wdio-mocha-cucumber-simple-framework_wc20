const BasePage = require("./base.page");

class PatientsPage extends BasePage {
  get SearchPatientString() {
    return $("editing-view-port");
  }
  get AddNewButton() {
    return $("//*[@class='add-patient-label']");
  }
  get tablePatients() {
    return $("//div[@class='e-headercontent']//table[@class='e-table']");
  }
}

module.exports = PatientsPage;
