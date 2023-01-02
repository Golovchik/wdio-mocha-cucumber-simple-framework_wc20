const DashboardPage = require('./dashboard.page');
const SchedulePage = require('./schedule.page');
const DoctorsPage = require('./doctors.page');
const PatientsPage = require('./patients.page');
const PreferencePage = require('./preference.page');
const AboutPage = require('./about.page');

function page(name) {
  const items = {
    dashboard: new DashboardPage(),
    schedule: new SchedulePage(),
    doctors: new DoctorsPage(),
    patients: new PatientsPage(),
    preference: new PreferencePage(),
    about: new AboutPage(),
  };
  return items[name];
}

module.exports = {
  page,
  DashboardPage,
  SchedulePage,
  DoctorsPage,
  PatientsPage,
  PreferencePage,
  AboutPage,
};
