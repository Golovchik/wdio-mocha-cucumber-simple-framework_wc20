@patients
Feature: Patients

    Background:
        Given I open the browser is at the 'Dashboard' page
        And I click on the 'Patients' item in the menu

    Scenario: Change patient
        When I click on the patient with mobile number '(717) 555-4444' on the element 'Name Link' on page 'Patients' on component 'Client Card'
        Then I should see modal dialog with title 'Patient Details' on page 'Patients' on component 'Client Details'

        When I click on the element 'Edit' on page 'Patients' on component 'Client Details'
        And  I enter 'Uladzislau' into element 'Name' on page 'Patients' on component 'Edit Patient Modal'
        And  I enter 'Uladzislau90@mail.com' into element 'Email' on page 'Patients' on component 'Edit Patient Modal'
        And  I enter 'I have problem!' into element 'Symptoms' on page 'Patients' on component 'Edit Patient Modal'
        And  I click on 'AB-' element in 'Blood Group' list on page 'Patients' on component 'Edit Patient Modal'
        And  I click on the element 'Save' on page 'Patients' on component 'Edit Patient Modal'
        Then I should see for patients 'Uladzislau' into elements 'Name' on page 'Patients' on component 'Client Card'