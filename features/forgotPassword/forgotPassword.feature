Feature: Forgot Password Functionality
  Scenario: Successful recieveing of reset password email
    Given I navigate to the login page
    When User click on "Forgot password?" link
    And User enter valid email as "adenugaadeyemiisaac@gmail.com"
    And User click on "Reset Password" button
    Then User should receive a password reset email

    Scenario: Unsuccessful recieveing of reset password email with invalid email
    Given I navigate to the login page
    When User click on "Forgot Password?" link
    And User enter invalid email as "admin@kdemy"
    And User click on "Reset Password" button
    #Then User should see an error message "Please enter a valid email address."