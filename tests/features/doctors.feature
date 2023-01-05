@Uladzislau_2
Feature: Doctors

    Background:
        Given I open the browser is at the 'Dashboard' page
        Given I click on the 'Doctors' item in the menu

    Scenario: Creating a new doctor
        When I click on the button 'Add new doctor' in a 'header list'
        Then I should see modal dialog with title 'New Doctor' on page 'Doctors'

# When I enter 'Uladzislau' in 'Doctor Name' input
#And I click 'Male' in 'Gender' input
#And I enter '(111) 111-1111' in 'Gender' input
#And I enter 'q@mail.ru' in 'Email' input
#And I enter '1234' in 'Education' input
#And I select '5+ years' option in drop-down 'Experience' on 'Doctors' page
# And I enter 'Practitioner' in 'Designation' input
# And I click button 'Save'
# Then I should see a new doctor with name 'Uladzislau'
