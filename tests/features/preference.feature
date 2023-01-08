@preference
Feature: Preference


    Background:
        Given I open the browser is at the 'Dashboard' page
        And I click on the 'Preference' item in the menu

    Scenario: Filling in the fields
        When I click on 'Monthly' element in 'Current View' list on page 'Preference' on component 'Settings'
        And I click on '9:00 AM' element in 'Calendar Start' list on page 'Preference' on component 'Settings'
        And I click on '6:00 PM' element in 'Calendar End' list on page 'Preference' on component 'Settings'
        And I click on '120 mins' element in 'Duration' list on page 'Preference' on component 'Settings'
        And I click on 'Department Colors' element in 'Booking Color' list on page 'Preference' on component 'Settings'
        And I click on 'Friday' element in 'First Day Of Week' list on page 'Preference' on component 'Settings'
        Then I should see text 'Monthly' into elements 'Current View Input' on page 'Preference' on component 'Settings'
        And I should see text '9:00 AM' into elements 'Calendar Start Input' on page 'Preference' on component 'Settings'
        And I should see text '6:00 PM' into elements 'Calendar End Input' on page 'Preference' on component 'Settings'
        And I should see text '120 mins' into elements 'Duration Input' on page 'Preference' on component 'Settings'
        And I should see text 'Department Colors' into elements 'Booking Color Input' on page 'Preference' on component 'Settings'
        And I should see text 'Friday' into elements 'First Day Of Week Input' on page 'Preference' on component 'Settings'