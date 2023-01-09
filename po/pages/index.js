const BasePage = require('./base.page');
const DashboardPage = require('./dashboard.page');
const SchedulePage = require('./schedule.page');
const DoctorsPage = require('./doctors.page');
const PatientsPage = require('./patients.page');
const PreferencePage = require('./preference.page');
const AboutPage = require('./about.page');

function pageFactory(name) {
  const items = {
    base: new BasePage(),
    dashboard: new DashboardPage(),
    schedule: new SchedulePage(),
    doctors: new DoctorsPage(),
    patients: new PatientsPage(),
    preference: new PreferencePage(),
    about: new AboutPage(),
  };
  return items[name.toLowerCase()];
}

module.exports = {
  pageFactory,
  BasePage,
  DashboardPage,
  SchedulePage,
  DoctorsPage,
  PatientsPage,
  PreferencePage,
  AboutPage,
};
