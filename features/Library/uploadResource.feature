@library
Feature: Create an Admin
    Background: Successful login with valid credentials
    Given I navigate to the login page
    When User enter valid email as "admin@tekademy.io" 
    And User enter valid password as "Password123!"
    And User click on login button

@LibraryResource
  Scenario: upload library resource successfully
    When User click on "Library" menu
    And User click on "Upload Resource" button
    And User enter title as "Test Resource"
    And User select category as "Tester"
    And User enter description as "This is a test resource"
    And User enter tags as "test, resource"
    And User upload file "C:\Users\NUGA\Documents\clinc\Chenot Palace Weggis.docx"
    And User click fileUrl and isPublished
    And User enter fileUrl as "https://example.com/testfile.pdf"
    And User click on Add Resource button
    Then User should see a success message "Resource uploaded"

@UncheckPublish
  Scenario: upload library resource successfully with uncheck publish immediately
    When User click on "Library" menu
    And User click on "Upload Resource" button
    And User enter title as "Test Resource"
    And User select category as "Tester"
    And User enter description as "This is a test resource"
    And User enter tags as "test, resource"
    And User upload file "C:\Users\NUGA\Documents\clinc\Chenot Palace Weggis.docx"
    And User click fileUrl and isPublished
    And User enter fileUrl as "https://example.com/testfile.pdf"
    And User uncheck the Publish immediately checkbox
    And User click on Add Resource button
    Then User should see a success message "Resource uploaded"


@3
  Scenario: upload library resource successfully with empty discription, empty tags and empty upload file
    When User click on "Library" menu
    And User click on "Upload Resource" button
    And User enter title as "Test Resource"
    And User select category as "Tester"
    And User click fileUrl and isPublished
    And User enter fileUrl as "https://example.com/testfile.pdf"
    And User click on Add Resource button
    Then User should see a success message "Resource uploaded"
@4  
  Scenario: upload library resource  with empty title
    When User click on "Library" menu
    And User click on "Upload Resource" button
    And User select category as "Tester"
    And User enter description as "This is a test resource"
    And User enter tags as "test, resource"
    And User click fileUrl and isPublished
    And User enter fileUrl as "https://example.com/testfile.pdf"
    And User click on Add Resource button
    Then user receive error message as "Title must be at least 2 characters."
@5  
Scenario: upload library resource  with empty category
    When User click on "Library" menu
    And User click on "Upload Resource" button
    And User enter title as "Test Resource"
    And User select category as "Tester"
    And User enter description as "This is a test resource"
    And User enter tags as "test, resource"
    And User click fileUrl and isPublished
    And User enter fileUrl as "https://example.com/testfile.pdf"
    And User click on Add Resource button
    Then user receive error message as "Select a category."

@6 
Scenario: upload library resource  with empty url
  When User click on "Library" menu
  And User click on "Upload Resource" button
  And User enter title as "Test Resource"
  And User enter description as "This is a test resource"
  And User enter tags as "test, resource"
  And User click fileUrl and isPublished
  And User click on Add Resource button
  Then user receive error message as "Add a public file URL."
@7
  Scenario: Repalace file upload
  When User click on "Library" menu
  And User click on "Upload Resource" button
  And User enter title as "Test Resource"
  And User select category as "Tester"
  And User enter description as "This is a test resource"
  And User enter tags as "test, resource"
  And User upload file "C:\Users\NUGA\Documents\clinc\Chenot Palace Weggis.docx"
  And User upload file "C:\Users\NUGA\Documents\clinc\Fountain Life.docx"
  And User click fileUrl and isPublished
  And User enter fileUrl as "https://example.com/testfile.pdf"
  And User click on Add Resource button
  Then User should see a success message "Resource uploaded"
@8
  Scenario: Remove file upload
  When User click on "Library" menu
  And User click on "Upload Resource" button
  And User enter title as "Test Resource"
  And User select category as "Tester"
  And User enter description as "This is a test resource"
  And User enter tags as "test, resource"
  And User upload file "C:\Users\NUGA\Documents\clinc\Chenot Palace Weggis.docx"
  And User click on "Remove" button
  And User click fileUrl and isPublished
  And User enter fileUrl as "https://example.com/testfile.pdf"
  And User click on Add Resource button
  Then User should see a success message "Resource uploaded"
@9
  Scenario: cancel button in upload resource
  When User click on "Library" menu
  And User click on "Upload Resource" button
  And User enter title as "Test Resource"
  And User select category as "Tester"
  And User enter description as "This is a test resource"
  And User enter tags as "test, resource"
  And User upload file "C:\Users\NUGA\Documents\clinc\Chenot Palace Weggis.docx"
  And User click on "Remove" button
  And User click fileUrl and isPublished
  And User enter fileUrl as "https://example.com/testfile.pdf"
  And User click on "Cancel" button
  Then User should be redirected to library page
@10
  Scenario: x button in upload resource
  When User click on "Library" menu
  And User click on "Upload Resource" button
  And User enter title as "Test Resource"
  And User select category as "Tester"
  And User enter description as "This is a test resource"
  And User enter tags as "test, resource"
  And User upload file "C:\Users\NUGA\Documents\clinc\Chenot Palace Weggis.docx"
  And User click on "Remove" button
  And User click fileUrl and isPublished
  And User enter fileUrl as "https://example.com/testfile.pdf"
  And User click on x button
  Then User should be redirected to library page
