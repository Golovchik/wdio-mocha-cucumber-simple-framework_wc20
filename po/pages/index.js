const DashboardPage = require('./dashboard.page');
const SchedulePage = require('./schedule.page');

function page(name) {
  const items = {
    dashboard: new DashboardPage(),
    schedule: new SchedulePage(),
  };
  return items[name];
}

module.exports = {
  page,
  DashboardPage,
  SchedulePage,
};
