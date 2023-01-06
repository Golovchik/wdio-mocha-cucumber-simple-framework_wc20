@2
Feature: User Flow on "About" page

Scenario: Check buttons on the "About" page

Background: Given I open the browser is at the "Dashboard" page

    Whent I click on the "About" button in the menu
    Then I should be on the "About" page 

    When I click on the "CheckBox" button in "About" page
    And I click on the "Dialog" button in "About" page
    And I click on the "TextBox" button in "About" page
    And I click on the "DropDownList" button in "About" page
    And I click on the "DatePicker" button in "About" page
    And I click on the "Button" button in "About" page
    And I click on the "Schedule" button in "About" page
    And I click on the "TreeView" button in "About" page
    And I click on the "Toast" button in "About" page
    And I click on the "Grid" button in "About" page
    And I click on the "Chart" button in "About" page
    And I click on the "TimePicker" button in "About" page
    And I click on the "Sidebar" button in "About" page
    And I click on the "ListView" button in "About" page    
	Then I should be on "CheckBox" Angular documentation page
    And I should be on "Dialog" Angular documentation page
    And I should be on "TextBox" Angular documentation page
    And I should be on "DropDownList" Angular documentation page
    And I should be on "DatePicker" Angular documentation page
    And I should be on "Button" Angular documentation page
    And I should be on "Schedule" Angular documentation page
    And I should be on "TreeView" Angular documentation page
    And I should be on "Toast" Angular documentation page
    And I should be on "Grid" Angular documentation page
    And I should be on "Chart" Angular documentation page
    And I should be on "TimePicker" Angular documentation page
    And I should be on "Sidebar" Angular documentation page
    And I should be on "ListView" Angular documentation page
