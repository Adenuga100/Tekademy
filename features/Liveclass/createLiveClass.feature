@researchResource
Feature: create a live class
    Background: Successful login with valid credentials
    Given I navigate to the login page
    When User enter valid email as "admin@tekademy.io" 
    And User enter valid password as "Password123!"
    And User click on login button

@search1
  Scenario: search library resource with title or url 
    When User click on "Library" menu
   