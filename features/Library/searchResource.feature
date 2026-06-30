@researchResource
Feature: Create an Admin
    Background: Successful login with valid credentials
    Given I navigate to the login page
    When User enter valid email as "superAdmin@tekademy.io" 
    And User enter valid password as "Password123!"
    And User click on login button

@search1
  Scenario: search library resource with title or url 
    When User click on "Library" menu
    And User enter title or url as "Test Resource"
    Then User should see the search result with title

@search2
  Scenario: search library resource with All types
    When User click on "Library" menu
    And User click on "All types" dropdown
    And User select "Video" option
    Then User should see the search results resources
@search3
  Scenario: search library resource with All types
    When User click on "Library" menu
    And User click on "All Categories" dropdown
    And User select "Tester" option
    Then User should see the search results resources
@search4
  Scenario: search library resource with All types
    When User click on "Library" menu
    And User click on "All Status" dropdown
    And User select "Published" option
    Then User should see the search results resources