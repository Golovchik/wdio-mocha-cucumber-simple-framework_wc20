@patients @smoke
Feature: User Flow on 'Patients' page

    Background:
        Given I open the browser is at the 'Dashboard' page
        And I click on the 'Patients' item in the menu

    @Uladzislau
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

    @Aislu
    Scenario: Check buttons and fields on the "Patients" page
        When I click on the 'Patients' item in the menu
        Then I should have page url 'https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/patients'


    @Morozova
    Scenario: Creating a new patient

        When I will click on this 'Add New Patient' on page 'Patients' on component 'List Header'
        When I enter 'Anna' into element 'Name' on page 'Patients' on component 'New Patient Modal'
        When I will click on this 'genderFemale' on page 'Patients' on component 'New Patient Modal'
        And  I enter '1111111111' into element 'Mobile' on page 'Patients' on component 'New Patient Modal'
        And  I enter 'q@mail.ru' into element 'Email' on page 'Patients' on component 'New Patient Modal'
        And  I click on 'AB+' element in 'Blood Group' list on page 'Patients' on component 'New Patient Modal'
        And  I enter 'Stomachache' into element 'Symptoms' on page 'Patients' on component 'New Patient Modal'
        When I will click on this 'save' on page 'Patients' on component 'New Patient Modal'
        Then I should see text 'Anna' into element 'Name' and text '(111) 111-1111' on page 'Patients' on component 'Client Card'

    @Morozova
    Scenario: Check Patients Details

        When I enter '(717) 555-4445' into element 'Search Patient' on page 'Patients' on component 'List Header'
        Then I should see patient with mobile number '(717) 555-4445' on the element 'Name Link' on page 'Patients' on component 'ClientCard'
        Then I should see for patients 'Milka' into elements 'Name' on page 'Patients' on component 'Client Details'