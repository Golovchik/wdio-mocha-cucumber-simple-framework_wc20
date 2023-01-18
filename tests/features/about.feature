@about @smoke
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