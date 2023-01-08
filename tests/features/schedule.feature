@schedule
Feature: Schedule

    Background:
        Given I open the browser is at the 'Dashboard' page
        And I click on the 'Schedule' item in the menu

    Scenario: Working filter of period schedule
        When I click on the element 'Previous' on page 'Schedule' on component 'Filter'
        Then I should see text of preiod as 'Jul 26 - Aug 01, 2020' into elements 'Period Representation' on page 'Schedule' on component 'Filter'

        When I click on the element 'Next' on page 'Schedule' on component 'Filter'
        Then I should see text of preiod as 'August 02 - 08, 2020' into elements 'Period Representation' on page 'Schedule' on component 'Filter'

        When I click on the element 'Day' on page 'Schedule' on component 'Filter'
        Then I should see text of preiod as 'August 5, 2020' into elements 'Period Representation' on page 'Schedule' on component 'Filter'

        When I click on the element 'Week' on page 'Schedule' on component 'Filter'
        Then I should see text of preiod as 'August 02 - 08, 2020' into elements 'Period Representation' on page 'Schedule' on component 'Filter'

        When I click on the element 'Month' on page 'Schedule' on component 'Filter'
        Then I should see text of preiod as 'August 2020' into elements 'Period Representation' on page 'Schedule' on component 'Filter'

        When I click on the element 'Timeline Day' on page 'Schedule' on component 'Filter'
        Then I should see text of preiod as 'August 5, 2020' into elements 'Period Representation' on page 'Schedule' on component 'Filter'

        When I click on the element 'Timeline Week' on page 'Schedule' on component 'Filter'
        Then I should see text of preiod as 'August 02 - 08, 2020' into elements 'Period Representation' on page 'Schedule' on component 'Filter'

        When I click on the element 'Timeline Work Week' on page 'Schedule' on component 'Filter'
        Then I should see text of preiod as 'August 02 - 08, 2020' into elements 'Period Representation' on page 'Schedule' on component 'Filter'

        When I click on the element 'Timeline Month' on page 'Schedule' on component 'Filter'
        Then I should see text of preiod as 'August 2020' into elements 'Period Representation' on page 'Schedule' on component 'Filter'


