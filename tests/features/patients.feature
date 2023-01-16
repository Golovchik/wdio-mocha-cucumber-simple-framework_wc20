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

    # Scenario: Check buttons and fields on the "Patients" page

    #    When I click on the "Patients" item in the menu
    #    Then I should be on the "Patients" item in the menu

    #    When I click on the "1 patient" field
    #     Then I should see the field got gray

    #    When I click on the "1 patient's name"
    #     Then I should a card with all information about the patient
    #     When I click on the "Edit" button
    #     And I enter "Kate" instead of "Laura" in the "Patien Name" field
    #    And I choose "male" instead of "female" in the "Gender" field
    #    And I click on the "DOB" icon
    #    And I choose "9/10/1980" instead of "9/03/1980"
    #    And I click on the "DOB" field
    #    And I choose "10/10/1980" instead of "9/03/1980"
    #    And I click on the "Blood Group" button
    #    And I choose "A+" instead of "O+" option in drop-down "Blood Group"
    #    And I click on the "Mobile Number" field
    #    And I enter "(717) 555-4445" instead of "(717) 555-4444"
    #    And I click on the "Email" field
    #   And I enter "kate90@mail.com" instead of "laura90@mail.com"
    #    And I click on the "Symptoms" field
    #    And I enter "Sweating, Chills" instead of "Sweating, Chills and Shivering"
    #    And I click on the "Save" button
    #    Then I should see "1 patient" field with new information
    #   When I click on the "1 patient's name"
    #    Then I should a card with new information about the patient
    #    When I click on the "Search Patient" field
    #    And I enter "Kate"
    #    And I click press enter
    #   Then I should see the only patient with the name "Kate" in the list



    #    When I click on the "Add New Patient" button
    #    Then I should see a blank card for a new patient
    #    And I enter "Kate" in the "Patien Name" field
    #    And I choose "male" in the "Gender" field
    #    And I click on the "DOB icon"
    #    And I choose "9/10/1980"
    #     And I click on the "DOB field"
    #     And I choose instead of "9/03/1980"
    #    And I click on the "Blood Group" button
    #    And I choose "A+" option in drop-down "Blood Group"
    #    And I click on the "Mobile Number" field
    #    And I enter "(717) 555-4445"
    #    And I click on the "Email" field
    #    And I enter "kate90@mail.com"
    #    And I click on the "Symptoms" field
    #    And I enter "Sweating, Chills"
    #    And I click on the "Save" button
    #    Then I should see a new patient field

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