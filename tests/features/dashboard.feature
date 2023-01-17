@dashboard @smoke
Feature: User Flow on 'Dashboard' page

    Background:
        Given I open the browser is at the 'Dashboard' page

    @Uladzislau
    Scenario: Checking that doctor availability after creation
        When I click on the 'Doctors' item in the menu
        And  I click on the element 'Add New Doctor' on page 'Doctors' on component 'List Header'
        Then I should see modal dialog with title 'New Doctor' on page 'Doctors' on component 'New Doctor Modal'

        When I enter 'Uladzislau' into element 'Name' on page 'Doctors' on component 'New Doctor Modal'
        And  I enter '1111111111' into element 'Phone' on page 'Doctors' on component 'New Doctor Modal'
        And  I enter 'q@mail.ru' into element 'Email' on page 'Doctors' on component 'New Doctor Modal'
        And  I enter '1234' into element 'Education' on page 'Doctors' on component 'New Doctor Modal'
        And  I click on the element 'Save' on page 'Doctors' on component 'New Doctor Modal'
        And  I click on the 'Dashboard' item in the menu
        Then I should see availability doctor with name 'Dr.Uladzislau' on page Dashboard on component 'Doctors Availability'