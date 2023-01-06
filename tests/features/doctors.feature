@2
Feature: User Flow on "Doctors" page

Scenario: Check buttons and fields on the "Doctors" page

Background: Given I open the browser is at the "Dashboard" page

    When I click on the "Doctors" item in the menu
    Then I should be on the "Doctors" item in the menu

    When I click on the "Dr. Nembo Lukeni" field
    Then I should see a card with all information about the doctor

    When I click on the "Edit" button
    And I enter "Nembo Lukenis" instead of "Nembo Lukeni" in the "Doctor Name" field
    And I choose "female" instead of "male" in the "Gender" field
    And I click on the "Mobile Number" field
    And I enter "(206) 555-9483" instead of "(206) 555-9482"
    And I click on the "Email" field
    And I enter "nembo136@sample.com" instead of "nembo36@sample.com"
    And I click on the "Department" field
    And I choose "Neurology" instead of "General Medicine" option in drop-down "Department"
    And I click on the "Education" field
    And I enter "MBBS" instead of "MBBS, DMRD"
    And I click on the "Experience" field
    And I choose "15+ years" instead of "10+ years" option in drop-down "Experience"
    And I click on the "Designation" field
    And I enter "Middle Specialist" instead of "Senior Specialist"
    And I click on the "Duty Timing" field
    And I choose "10:00 AM - 07:00 PM" instead of "08:00 AM - 05:00 PM" option in drop-down "Duty Timing"
    And I click on the "Save" button
    Then I should see a doctor's card with new information

    When I click on "Arrow" icon
    Then I should be on the "Doctors" item in the menu

    When I click on "Select a Specialization" field
    And I choose "Dermatology"
    Then I should see a doctors with "Dermatology" specialization only

    When I click on "Add New Doctor" button
    Then I should see a blank card for a new doctor
    When I enter "Uladzislau" in "Doctor Name" field
    And I click "male" in the "Gender" field
    And I enter "(111) 111-1111" in "Gender" field
    And I enter "q@mail.ru" in "Email" field
    And I enter "1234" in "Education" field
    And I select "5+ years" option in drop-down "Experience"
    And I enter 'Practitioner' in "Designation" field
    And I click button "Save"
    Then I should see a new doctor with name 'Uladzislau'
