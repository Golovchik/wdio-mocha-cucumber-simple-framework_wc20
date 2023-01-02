const DashboardPage = require('./dashboard.page');
const SchedulePage = require('./schedule.page');
const DoctorsPage = require('./doctors.page');
const PatientsPage = require('./patients.page');

function page(name) {
  const items = {
    dashboard: new DashboardPage(),
    schedule: new SchedulePage(),
    doctors: new DoctorsPage(),
    patients: new PatientsPage(),
  };
  return items[name];
}

module.exports = {
  page,
  DashboardPage,
  SchedulePage,
  DoctorsPage,
  PatientsPage,
};
