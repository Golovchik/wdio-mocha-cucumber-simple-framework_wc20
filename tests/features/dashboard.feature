@2
Feature: Dashboard

    Background: Given I open the browser is at the "Dashboard" page

    Scenario: Check buttons, fields and cells on the "Dashboard" page

        When I click on the "Dashboard" item in the menu
        Then I should be on the "Dashboard" page

        When I click on the "Book Appointments" item
        Then I should be on the "Schedule" page

        When I click on the "Amelia Edwards" name in the "Today's Appointments" table
        Then I should be on the doctor's card on the "Doctors" page

        When I click on the "Added New Doctor" cell in the "Recent Activities" table on the right
        Then I should see the cell turns gray

        When I click on the "View all" item in the "Doctor's Availability" table
        Then I should be on the "Doctors" page

        When I click on the "Dr. Nembo Lukeni" name in the "Doctor's Availability" table
        Then I should see the cell turns gray

