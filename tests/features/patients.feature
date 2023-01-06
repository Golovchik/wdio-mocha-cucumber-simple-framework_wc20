@2
Feature: Patients

    Background:
        Given I open the browser is at the "Dashboard" page
        Given I click on the "Patients" item in the menu

   #Scenario: Creating a new patients
   #     When I click on the element 'Add new Patient' on page 'Patients' on component  'header list'
   #     Then I should see modal dialog with title 'New Patient' on page 'patients'  
    #    When I write text 'Anna' on element 'Patient Name' 
    #   And I click on the element 'Female' in the 'Gender' on page 'patient' on the component 'header list'
    #    And I write text '(111) 111-1111' on element 'Mobile Number' 
    #    And I write text 'a@mail.ru' on element 'Email' 
    #    And I write text 'stomach ache' on element 'Symptoms' 
     #   And I select 'B+' option in drop-down 'Blood Group' on 'New Patient' page
    #    And I click button 'Save'
    #    Then I should see a new patient with name 'Anna'


        Scenario: Check Patients Details
        When I enter 'Milka' on the string 'Search Patient' in the 'header list'
        Then I should see table with title  in the 'header list'
        And I click 'Milka' in the table 'Patient List'
        Then I should see modal window 'Patient Details' about 'Milka'



    Scenario: Creating a new patients
       When I click on element 'Add new Patient' 
       Then I should see modal dialog with title 'New Patient' on page 'patients'  
       When I write text 'Anna' on element 'Patient Name' 
       And I click on element 'Female' 
       And I write text '(111) 111-1111' on element 'Mobile Number' 
       And I write text 'a@mail.ru' on element 'Email' 
       And I write text 'stomach ache' on element 'Symptoms' 
       And I select element 'B+' on droplist 'Blood Group'
       And I click on element 'Save'
       Then I should see element 'Anna' on component 'patients list'