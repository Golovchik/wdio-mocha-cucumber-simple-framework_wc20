@2
Feature: User Flow on "Preference"

    Background:
        Given I open the browser is at the "Dashboard" page

    Scenario: Fill the fields on "Preference" page

        When I click on the "Preference" item in the menu
        Then I should be on the "Preference" page

        When I choose "Daily" on the "Default view" field
        And I choose "9:00 AM" on the "Calendar Start Time" field
        And I choose "6:00 PM" on the "Calendar End Time" field
        And I choose "30 mins" on the "Slot Duration" field
        And I choose "Department Colors" on the "Booking Color" field
        And I choose "Tuesday" on the "First day of the Week" field
        Then I should have "Daily" on the "Default view" field
        And I should have "9:00 AM" on the "Calendar Start Time" field
        And I should have "6:00 PM" on the "Calendar End Time" field
        And I should have "30 mins" on the "Slot Duration" field
        And I should have "Department Colors" on the "Booking Color" field
        And I should have "Tuesday" on the "First day of the Week" field



