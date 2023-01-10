@Uladzislau_2
Feature: Doctors

    Background:
        Given I open the browser is at the 'Dashboard' page
        And I click on the 'Doctors' item in the menu

    # Scenario: Creating a new doctor

    #     When I click on the element 'Add New Doctor' on page 'Doctors' on component 'List Header'
    #     Then I should see modal dialog with title 'New Doctor' on page 'Doctors' on component 'New Doctor Modal'

    #     When I enter 'Uladzislau' into element 'Name' on page 'Doctors' on component 'New Doctor Modal'
    #     And  I click on the element 'Gender Male' on page 'Doctors' on component 'New Doctor Modal'
    #     And  I enter '1111111111' into element 'Phone' on page 'Doctors' on component 'New Doctor Modal'
    #     And  I enter 'q@mail.ru' into element 'Email' on page 'Doctors' on component 'New Doctor Modal'
    #     And  I enter '1234' into element 'Education' on page 'Doctors' on component 'New Doctor Modal'
    #     And  I click on '5+ years' element in 'Experience' list on page 'Doctors' on component 'New Doctor Modal'
    #     And  I enter 'Practitioner' into element 'Designation' on page 'Doctors' on component 'New Doctor Modal'
    #     And  I click on the element 'Save' on page 'Doctors' on component 'New Doctor Modal'
    #     Then I should see for doctors 'Dr. Uladzislau' into elements 'Name' on page 'Doctors' on component 'Specialist Card'

    # Scenario: Check buttons and fields on the "Doctors" page

    #     When I click on the "Doctors" item in the menu
    #     Then I should be on the "Doctors" item in the menu

    #     When I click on the "Dr. Nembo Lukeni" field
    #     Then I should see a card with all information about the doctor

    #     When I click on the "Edit" button
    #     And I enter "Nembo Lukenis" instead of "Nembo Lukeni" in the "Doctor Name" field
    #     And I choose "female" instead of "male" in the "Gender" field
    #     And I click on the "Mobile Number" field
    #     And I enter "(206) 555-9483" instead of "(206) 555-9482"
    #     And I click on the "Email" field
    #     And I enter "nembo136@sample.com" instead of "nembo36@sample.com"
    #     And I click on the "Department" field
    #     And I choose "Neurology" instead of "General Medicine" option in drop-down "Department"
    #     And I click on the "Education" field
    #     And I enter "MBBS" instead of "MBBS, DMRD"
    #     And I click on the "Experience" field
    #     And I choose "15+ years" instead of "10+ years" option in drop-down "Experience"
    #     And I click on the "Designation" field
    #     And I enter "Middle Specialist" instead of "Senior Specialist"
    #     And I click on the "Duty Timing" field
    #     And I choose "10:00 AM - 07:00 PM" instead of "08:00 AM - 05:00 PM" option in drop-down "Duty Timing"
    #     And I click on the "Save" button
    #     Then I should see a doctor's card with new information

    #     When I click on "Arrow" icon
    #     Then I should be on the "Doctors" item in the menu

    #     When I click on "Select a Specialization" field
    #     And I choose "Dermatology"
    #     Then I should see a doctors with "Dermatology" specialization only

    #     When I click on "Add New Doctor" button
    #     Then I should see a blank card for a new doctor
    #     When I enter "Uladzislau" in "Doctor Name" field
    #     And I click "male" in the "Gender" field
    #     And I enter "(111) 111-1111" in "Gender" field
    #     And I enter "q@mail.ru" in "Email" field
    #     And I enter "1234" in "Education" field
    #     And I select "5+ years" option in drop-down "Experience"
    #     And I enter 'Practitioner' in "Designation" field
    #     And I click button "Save"
    #     Then I should see a new doctor with name 'Uladzislau'


    Scenario: Change Doctor

        When I click on the element 'Specialist Detail' on page 'Doctors' on component 'Specialist Card'
        Then I should see element 'Title' on page 'Doctors' on component 'Specialist Details'
        And I click on the element 'Edit' on page 'Doctors' on component 'Specialist Details'
        Then I should see modal dialog with title 'Edit Doctor' on page 'Doctors' on component 'Change Doctor Modal'
        And I enter '1111111111' into element 'Phone' on page 'Doctor' on component 'Change Doctor Modal'
        And I click on the element 'Save' on page 'Doctors' on component 'Change Doctor Modal'
        Then I should see '1111111111' into elements 'Mobile' on page 'Doctors' on component 'Specialist Details'


    # Scenario: Delete Doctor

    #     When I click on the element 'Specialist Detail' on page 'Doctors' on component 'Specialist Card'
    #     Then I should see element 'Title' on page 'Doctors' on component 'Specialist Details'
    #     And I click on the element 'Delete' on page 'Doctors' on component 'Specialist Details'
    #     And I click on the element 'ok' on 'Doctors' on component 'Delete Doctor Modal'
    #     Then I should'nt see element '([^"]*)' on page '([^"]*)' on component '([^"]*)'$/



# //*[text()='(717) 555-4444']/parent::tr/td[2]