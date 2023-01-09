@2
Feature: User Flow on "Patients" page

    Background:
        Given I open the browser is at the "Dashboard" page

    Scenario: Check buttons and fields on the "Patients" page

        When I click on the "Patients" item in the menu
        Then I should be on the "Patients" item in the menu

        When I click on the "1 patient" field
        Then I should see the field got gray

        When I click on the "1 patient's name"
        Then I should a card with all information about the patient
        When I click on the "Edit" button
        And I enter "Kate" instead of "Laura" in the "Patien Name" field
        And I choose "male" instead of "female" in the "Gender" field
        And I click on the "DOB" icon
        And I choose "9/10/1980" instead of "9/03/1980"
        And I click on the "DOB" field
        And I choose "10/10/1980" instead of "9/03/1980"
        And I click on the "Blood Group" button
        And I choose "A+" instead of "O+" option in drop-down "Blood Group"
        And I click on the "Mobile Number" field
        And I enter "(717) 555-4445" instead of "(717) 555-4444"
        And I click on the "Email" field
        And I enter "kate90@mail.com" instead of "laura90@mail.com"
        And I click on the "Symptoms" field
        And I enter "Sweating, Chills" instead of "Sweating, Chills and Shivering"
        And I click on the "Save" button
        Then I should see "1 patient" field with new information

        When I click on the "1 patient's name"
        Then I should a card with new information about the patient

        When I click on the "Search Patient" field
        And I enter "Kate"
        And I click press enter
        Then I should see the only patient with the name "Kate" in the list

        When I click on the "Add New Patient" button
        Then I should see a blank card for a new patient
        And I enter "Kate" in the "Patien Name" field
        And I choose "male" in the "Gender" field
        And I click on the "DOB icon"
        And I choose "9/10/1980"
        And I click on the "DOB field"
        And I choose instead of "9/03/1980"
        And I click on the "Blood Group" button
        And I choose "A+" option in drop-down "Blood Group"
        And I click on the "Mobile Number" field
        And I enter "(717) 555-4445"
        And I click on the "Email" field
        And I enter "kate90@mail.com"
        And I click on the "Symptoms" field
        And I enter "Sweating, Chills"
        And I click on the "Save" button
        Then I should see a new patient field



