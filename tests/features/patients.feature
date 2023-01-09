@2
Feature: Patients

    Background:
        Given I open the browser is at the "Dashboard" page
        And I click on the "Patients" item in the menu

    Scenario: Creating a new patient

        When I click on the element 'Add New Patient' on page 'Patients' on component 'List Header'
        Then I should see modal dialog with title 'New Patieent' on page 'Patients' on component 'newPatientModal'
        When I enter 'Anna' into element 'Name' on page 'Patients' on component 'newPatientModal'
        And  I click on the element 'Gender Male' on page 'Patients' on component 'newPatientModal'
        And  I enter '1111111111' into element 'Mobile' on page 'Patients' on component 'newPatientModal'
        And  I enter 'q@mail.ru' into element 'Email' on page 'Patients' on component 'newPatientModal'
        And  I click on 'AB+' element in 'Blood Group' list on page 'Patients' on component 'newPatientModal'
        And  I enter 'stomachache' into element 'Symptoms' on page 'Patients' on component 'newPatientModal'
        And  I click on element 'Save' on page 'Patients' on component 'newPatientModal'
        Then I should see 'Anna' into elements 'Name' on page 'Patients' on component 'ClientDetails'


    Scenario: Check Patients Details

        When I enter 'Milka' on the string 'Search Patient' in the 'header list'
        Then I should see table with title  in the 'header list'
        And I click 'Milka' in the table 'Patient List'
        Then I should see modal window 'Patient Details' about 'Milka'


