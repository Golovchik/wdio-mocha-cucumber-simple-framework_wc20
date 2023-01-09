@Uladzislau_2
Feature:'Doctors'
    Background:
        Given I open the browser is at the 'Dashboard' page
        And I click on the 'Doctors' item in the menu


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
        #And  I click button 'Save' on page 'Doctors' on component 'New Doctor Modal'
        And  I click on the element 'Save' on page 'Doctors' on component 'New Doctor Modal'
        Then I should see 'Dr. Uladzislau' into elements 'Name' on page 'Doctors' on component 'Specialist Card'


    Scenario: Change Doctor

        When I click on the element 'Specialist Detail' on page 'Doctors' on component 'Specialist Card'
        Then I should see element 'Title' on page 'Doctors' on component 'Specialist Details'
        And I click on the element 'Edit' on page 'Doctors' on component 'Specialist Details'
        Then I should see modal dialog with title 'Edit Doctor' on page 'Doctors' on component 'Change Doctor Modal'
        And I enter '1111111111' into element 'Phone' on page 'Doctor' on component 'Change Doctor Modal'
        And I click on the element 'Save' on page 'Doctors' on component 'Change Doctor Modal'
        Then I should see '1111111111' into elements 'Mobile' on page 'Doctors' on component 'Specialist Details'


    Scenario: Delete Doctor

        When I click on the element 'Specialist Detail' on page 'Doctors' on component 'Specialist Card'
        Then I should see element 'Title' on page 'Doctors' on component 'Specialist Details'
        And I click on the element 'Delete' on page 'Doctors' on component 'Specialist Details'
        And I click on the element 'ok' on 'Doctors' on component 'Delete Doctor Modal'
        Then I should'nt see element '([^"]*)' on page '([^"]*)' on component '([^"]*)'$/



