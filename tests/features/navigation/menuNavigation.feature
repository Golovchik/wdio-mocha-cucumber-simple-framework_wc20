@regression
Feature: Menu Navigation

    As a user, I want to be able to navigate through out the website
    using the menu links to get to various pages

    Background:
        Given the browser is at the "Dashboard" page

    Scenario Outline: Navigating through the main menu items from the dashboard page
        When the user clicks on the "<menuItem>" item in the menu
        Then the page should have tag "<tag>"

        Examples:
            | menuItem  | tag          |
            | Dashboard | app-ashboard |
            | Schedule  | app-schedule |