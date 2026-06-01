@AdminCreation
Feature: Create an Admin
    Background: Successful login with valid credentials
    Given I navigate to the login page
    When User enter valid email as "superAdmin@tekademy.io" 
    And User enter valid password as "Password123!"
     And User click on "Continue with this email" button

@1
  Scenario: Successful registration with valid credentials
    When User click on "User Management" menu
    And User click on "Add New User" button
    And User enter first name 
    And User enter last name
    And User enter email as 
    And User enter strong password as "Password123!"
    # And User enter DOB
    And User select any role
    And User click on "Add User" button
    Then User should see a success message "User created successfully"
  
  @AdminDOB
  Scenario: Successful registration with DOB 
    When User click on "User Management" menu
    And User click on "Add New User" button
    And User enter first name 
    And User enter last name
    And User enter email as 
    And User enter strong password as "Password123!"
    And User enter DOB
    And User select any role
    And User click on "Add User" button
    
    Then User should see a success message "User created successfully"
