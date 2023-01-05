const {When} = require('@cucumber/cucumber');
const {page} = require('../po/pages/index');

// When I click on the button "Add new doctor" in a 'header list'
When(
    /^I click on the button 'Add new doctor' in a 'header list'$/,
    async () => {
      await page('Doctors').listHeader.addNewDoctorBtn.click();
    },
);
