/* eslint-disable max-len */
const BasePage = require('./base.page');
const ChangePatientModalComponent = require('../components/patients/changePatientModal.component');
const ListHeaderComponent = require('../components/patients/listHeader.component');
const ClientCardComponent = require('../components/patients/clientCard.component');
const ClientDetailsComponent = require('../components/patients/clientDetails.component');
const DeletePatientModalComponent = require('../components/patients/deletePatientModal.component');

class PatientsPage extends BasePage {
  constructor(url) {
    super('/showcase/angular/appointmentplanner/#/patients');
    this.newPatientModal = new ChangePatientModalComponent();
    this.editPatientModal = new ChangePatientModalComponent();
    this.listHeader = new ListHeaderComponent();
    this.clientDetails = new ClientDetailsComponent();
    this.deletePatientModal = new DeletePatientModalComponent();

    this.patientQueryPart = '//*[text()';
    this.searchPatientString = 'editing-view-port';
    this.addNewButton = '//*[@class=\'add-patient-label\']';
    this.patientName = '//*[@class=\'patient-name\']';
  }

  clientCard(number) {
    return new ClientCardComponent(number);
  }


  getPatient(name) {
    return this.rootEl.$(`${patientQueryPart}='${name}']`);
  }
}

module.exports = PatientsPage;
