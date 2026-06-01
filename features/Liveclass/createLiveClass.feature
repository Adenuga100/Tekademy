@Liveclass
Feature: create a live class
    Background: Successful login with valid credentials
    Given I navigate to the login page
    When User enter valid email as "admin@tekademy.io" 
    And User enter valid password as "Password123!"
    And User click on login button

@live1
  Scenario: create a live class successfully 
    When User click on "Live classes" menu
   And User click on "Create Live Class" button
    And User enter class title as "Test"
    And User enter date
    And User enter time 
    And User enter duration 
    And User click on "Create Class" button
    Then User should see a success message "Live class created successfully"

@live2
  Scenario: create a live class with empty class title 
    When User click on "Live classes" menu
   And User click on "Create Live Class" button
    And User enter date
    And User enter time 
    And User enter duration 
    And User click on "Create Class" button   
    Then user receive an alert message as "Please fill out this field."    

@live3
Scenario:  Scenario: create a live class with empty date
    When User click on "Live classes" menu
   And User click on "Create Live Class" button
    And User enter class title as "Test"
    And User enter time 
    And User enter duration 
    And User click on "Create Class" button
    Then user receive an alert date message as "Please fill out this field." 

@live4
Scenario:  Scenario: create a live class with empty time
    When User click on "Live classes" menu
   And User click on "Create Live Class" button
    And User enter class title as "Test"
    And User enter date
    And User enter duration 
    And User click on "Create Class" button
    Then user receive an alert time message as "Please fill out this field." 

@live5
Scenario:  Scenario: create a live class with value less than 15 duration
    When User click on "Live classes" menu
   And User click on "Create Live Class" button
    And User enter class title as "Test"
    And User enter date
    And User enter time 
    And User enter duration as "10"
    And User click on "Create Class" button
    Then user receive an alert duration message as "Value must be greater than or equal to 15." 