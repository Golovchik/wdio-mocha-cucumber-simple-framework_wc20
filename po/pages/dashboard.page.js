/* eslint-disable max-len */
const BasePage = require('./base.page');
const ConsultationComponent = require('../components/dashboard/consultation.component');
const TodaysAppointmentsComponent = require('../components/dashboard/todaysAppointments.component');

class DashboardPage extends BasePage {
  constructor() {
    super('/showcase/angular/appointmentplanner/#/dashboard');
    this.consultation = new ConsultationComponent();
    this.todaysAppointments = new TodaysAppointmentsComponent();
  }
}

module.exports = DashboardPage;
