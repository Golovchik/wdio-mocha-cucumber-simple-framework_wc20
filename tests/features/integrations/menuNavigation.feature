@menuNavigation @smoke
Feature: Menu Navigation

    As a user, I want to be able to navigate through out the website
    using the menu links to get to various pages

    Background:
        Given I open the browser is at the 'Dashboard' page

    @Uladzislau
    Scenario Outline: Navigating through the main menu items from the dashboard page
        When I click on the '<menuItem>' item in the menu
        Then I should have page url '<pageUrl>'

        Examples:
            | menuItem   | pageUrl                                                                     |
            | Dashboard  | https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard  |
            | Schedule   | https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/calendar   |
            | Doctors    | https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/doctors    |
            | Patients   | https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/patients   |
            | Preference | https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/preference |
            | About      | https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/about      |

