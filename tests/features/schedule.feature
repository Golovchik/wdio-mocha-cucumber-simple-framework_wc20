@2
Feature: Schedule

    Background: Given I open the browser is at the "Dashboard" page

    Scenario: Check buttons, fields and cells on the "Schedule" page

        When I click on the "Schedule" item in the menu
        Then I should be on the "Schedule" page

        When I click on the "Choose Specialist" drop-down
        And I click on the "Mollie Cobb" name
        Then I should see the Mollie Cobb's Schedule

        When I click on the "Choose Specialist" drop-down
        And I click on "Add New Doctor" button
        Then I should see a blank card for a new doctor
        When I enter "Uladzislau" in "Doctor Name" field
        And I click "male" in the "Gender" field
        And I enter "(111) 111-1111" in "Gender" field
        And I enter "q@mail.ru" in "Email" field
        And I enter "1234" in "Education" field
        And I select "5+ years" option in drop-down "Experience"
        And I enter 'Practitioner' in "Designation" field
        And I click button "Save"
        Then I should see a new doctor with name 'Uladzislau' in drop-down list

        When I click on the "Laura" cell in the right panel
        And I pull the cell down after the second cell
        Then I should see the "Laura" cell gone down

        When I click on the arrow icon on the upper part of the Schedule
        Then I should see the other day's schedule

        When I click on the "Date" drop-down
        And I choose the 12-th of August 2020
        Then I should see the schedule for the period of 09-15-th of August 2020

        When I click on the "Day" button
        Then I should see the schedule for the day

        When I click on the "Week" button
        Then I should see the schedule for the day

        When I click on the "Month" button
        Then I should see the schedule for the day

        When I click on the "Timeline Day" button
        Then I should see the schedule for the day



