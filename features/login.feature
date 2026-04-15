Feature: User Login
  Scenario: Successful login with valid credentials
    Given I navigate to the login page
    When User enter valid email as "admin@tekademy.io" 
    And User enter valid password as "Password123!"
    And User click on login button
    Then I should be redirected to the dashboard

 Scenario: Successful login with valid credentials by clicking on remember me checkbox
   Given I navigate to the login page
   When User enter valid email as "admin@tekademy.io" 
   And User enter valid password as "Password123!"
   And User click on remember me checkbox
   And User click on login button
   Then I should be redirected to the dashboard

 Scenario: Unsuccessful login with invalid credentials by clicking on remember me checkbox
   Given I navigate to the login page
   When User enter valid email as "admin@tekdy.com" 
   And User enter valid password as "Password123!"
   And User click on remember me checkbox
   And User click on login button
   Then user receive error message as "Invalid email or password"
    