/* eslint-disable max-len */
const BasePage = require('./base.page');
const DoctorsAvailabilityComponent = require('../components/dashboard/doctorsAvailability.component');
const TodaysAppointmentsComponent = require('../components/dashboard/todaysAppointments.component');

class DashboardPage extends BasePage {
  constructor() {
    super('/showcase/angular/appointmentplanner/#/dashboard');
    this.doctorsAvailability = new DoctorsAvailabilityComponent();
    this.todaysAppointments = new TodaysAppointmentsComponent();
  }
}

module.exports = DashboardPage;
