@doctors @smoke
Feature: Doctors

    Background:
        Given I open the browser is at the 'Dashboard' page
        And I click on the 'Doctors' item in the menu
    @Uladzislau
    Scenario: Creating a new doctor

        When I click on the element 'Add New Doctor' on page 'Doctors' on component 'List Header'
        Then I should see modal dialog with title 'New Doctor' on page 'Doctors' on component 'New Doctor Modal'

        When I enter 'Uladzislau' into element 'Name' on page 'Doctors' on component 'New Doctor Modal'
        And  I click on the element 'Gender Male' on page 'Doctors' on component 'New Doctor Modal'
        And  I enter '1111111111' into element 'Phone' on page 'Doctors' on component 'New Doctor Modal'
        And  I enter 'q@mail.ru' into element 'Email' on page 'Doctors' on component 'New Doctor Modal'
        And  I enter '1234' into element 'Education' on page 'Doctors' on component 'New Doctor Modal'
        And  I click on '5+ years' element in 'Experience' list on page 'Doctors' on component 'New Doctor Modal'
        And  I enter 'Practitioner' into element 'Designation' on page 'Doctors' on component 'New Doctor Modal'
        And  I click on the element 'Save' on page 'Doctors' on component 'New Doctor Modal'
        Then I should see for doctors 'Dr. Uladzislau' into elements 'Name' on page 'Doctors' on component 'Specialist Card'

    @Aislu
    Scenario: Check buttons and fields on the "Doctors" page
        When I click on the 'Doctors' item in the menu
        Then I should have page url 'https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/doctors'



    @Morozova
    Scenario: Change Doctor

        When I click on 'Specialist Card' with name 'Dr. Mollie Cobb' on page 'Doctors'
        Then I should see that element 'Title' with text 'DOCTOR DETAILS' on page 'Doctors' on component 'Specialist Details'
        And I click on the button 'Edit' on page 'Doctors' on component 'Specialist Details'
        Then I should see modal dialog with 'Title' with text 'Edit Doctor' on page 'Doctors' on component 'Edit Doctor Modal'
        When I enter 'GRGMU' into element 'Education' on page 'Doctors' on component 'Edit Doctor Modal'
        And I click on the element 'Save' on page 'Doctors' on component 'Edit Doctor Modal'
        Then I should see that element 'Education' with text 'GRGMU' on page 'Doctors' on component 'Specialist Details'
    @Morozova
    Scenario: Delete Doctor

        When I click on 'Specialist Card' with name 'Dr. Nembo Lukeni' on page 'Doctors'
        Then I should see this 'Title' on page 'Doctors' on component 'Specialist Details'
        And I click on the button 'Delete' on page 'Doctors' on component 'Specialist Details'
        And I click on the button 'Ok' on page 'Doctors' on component 'Delete Doctor Modal'
        And I click on the 'Doctors' item in the menu
        Then I should not see doctor with name 'Dr. Nembo Lukeni' on page 'Doctors' on component 'Specialist Card'