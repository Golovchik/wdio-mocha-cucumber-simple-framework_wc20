/* eslint-disable max-len */
const BasePage = require('./base.page');
const ChangeDoctorModalComponent = require('../components/doctors/changeDoctorModal.component');
const DeleteDoctorModalComponent = require('../components/doctors/deleteDoctorModal.component');
const ListHeaderComponent = require('../components/doctors/listHeader.component');
const SpecialistCardComponent = require('../components/doctors/specialistCard.component');
const SpecialistDetailsComponent = require('../components/doctors/specialistDetails.component');

class DoctorsPage extends BasePage {
  constructor() {
    super('/showcase/angular/appointmentplanner/#/doctors');
    this.newDoctorModal = new ChangeDoctorModalComponent();
    this.editDoctorModal = new ChangeDoctorModalComponent();
    this.deleteDoctorModal = new DeleteDoctorModalComponent();
    this.listHeader = new ListHeaderComponent();
    this.specialistDetails = new SpecialistDetailsComponent();
    this.doctorQueryPart = '//*[text()';
    this.addNewDoctorButton = '//*[@class=\'add-doctor-label\']';
    this.selectSpecString = '//span[@aria-owns=\'Specialization_options\']';
    this.specializationSelect = '//*[@id=\'Specialization_hidden\']//option';
  }

  specialistCard(name) {
    return new SpecialistCardComponent(name);
  }

  getDoctorInfoByName(name) {
    return this.rootEl.$(`${doctorQueryPart}='Dr. ${name}']`);
  }

  getSpecialization(spec) {
    return this.rootEl.$(`${specializationSelect}[@value=Ne'${spec}']`);
  }
}

module.exports = DoctorsPage;
