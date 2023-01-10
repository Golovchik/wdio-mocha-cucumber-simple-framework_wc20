@about
Feature: User Flow on 'About' page

    Background:
        Given I open the browser is at the 'Dashboard' page
        And I click on the 'About' item in the menu

    @Uladzislau
    Scenario Outline: Navigating through the list components from the about page
        When I click on the element '<componentItem>' on page 'About' on component 'List Components'
        Then I should have new page with url '<pageUrl>'

        Examples:
            | componentItem | pageUrl                                                                             |
            | CheckBox      | https://ej2.syncfusion.com/angular/documentation/check-box/getting-started          |
            | Dialog        | https://helpej2.syncfusion.com/angular/documentation/dialog/getting-started         |
            | TextBox       | https://helpej2.syncfusion.com/angular/documentation/textbox/getting-started        |
            | DropDownList  | https://helpej2.syncfusion.com/angular/documentation/drop-down-list/getting-started |
            | DatePicker    | https://helpej2.syncfusion.com/angular/documentation/datepicker/getting-started     |
            | Button        | https://helpej2.syncfusion.com/angular/documentation/button/getting-started         |
            | Schedule      | https://helpej2.syncfusion.com/angular/documentation/schedule/getting-started       |
            | TreeView      | https://ej2.syncfusion.com/angular/documentation/treeview/getting-started           |
            | Toast         | https://helpej2.syncfusion.com/angular/documentation/toast/getting-started          |
            | Grid          | https://helpej2.syncfusion.com/angular/documentation/grid/getting-started           |
            | Chart         | https://helpej2.syncfusion.com/angular/documentation/chart/getting-started          |
            | TimePicker    | https://helpej2.syncfusion.com/angular/documentation/timepicker/getting-started     |
            | Sidebar       | https://helpej2.syncfusion.com/angular/documentation/sidebar/getting-started        |
            | ListView      | https://helpej2.syncfusion.com/angular/documentation/list-view/getting-started      |


    Scenario: Check buttons on the "About" page

        When I click on the "About" button in the menu
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
