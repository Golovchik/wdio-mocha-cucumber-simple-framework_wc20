const BasePage = require('./base.page');

class PatientsPage extends BasePage {
  constructor(url) {
    super(url);
    this.patientQueryPart = '//*[text()';
    this.searchPatientString = 'editing-view-port';
    this.addNewButton = '//*[@class=\'add-patient-label\']';
    this.patientName = '//*[@class=\'patient-name\']';
  }

  getPatient(name) {
    return this.rootEl.$(`${patientQueryPart}='${name}']`);
  }
}

module.exports = PatientsPage;
