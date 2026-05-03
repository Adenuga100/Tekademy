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
    