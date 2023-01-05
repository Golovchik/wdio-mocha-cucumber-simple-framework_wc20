@2
Feature: Patients

    Background:
        Given I open the browser is at the "Dashboard" page
        Given I click on the "Patients" item in the menu

   Scenario: Creating a new patients
        When I click on the button "Add new Patient" in a header
        Then I should see modal dialog with title 'New Patient'
        When I enter 'Anna' in 'Patient Name' input
        And I click 'Female' in 'Gender' input
        And I enter '(111) 111-1111' in 'Mobile Number' input
        And I enter 'a@mail.ru' in 'Email' input
        And I enter 'stomach ache' in 'Symptoms' input
        And I select 'B+' option in drop-down 'Blood Group' on 'New Patient' page
        And I click button 'Save'
        Then I should see a new patient with name 'Anna'


        Scenario: Check Patients Details
        When I enter 'Milka' on the string 'Search Patient' in a header
        Then I should see table with title  in a header
        And I click 'Milka' in the table 'Patient List'
        Then I should see modal window 'Patient Details' about 'Milka'