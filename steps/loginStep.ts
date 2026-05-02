import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from '@playwright/test';
import { LoginPage } from "../pages/loginPage";
import { CustomWorld } from '../hooks/world';

// 1. Declare the variable at the top (without 'this')
let loginPage: LoginPage;
Given('I navigate to the login page', async function () {
    // Pass the page initialized in your hooks (this.page!) to the constructor
   loginPage = new LoginPage(this.page!);
    await loginPage.navigate();
});

When('User enter valid password as {string}', async function (pass: string) {
  // Write code here that turns the phrase above into concrete actions
  await loginPage.enterPassword(pass);
})

When('User enter valid email as {string}', async function (email: string)   {
  // Write code here that turns the phrase above into concrete actions
  await loginPage.enterEmail(email);
})



When('User click on login button', async () => {
  // Write code here that turns the phrase above into concrete actions
  await loginPage.clickLoginButton();
  
})



Then('I should be redirected to the dashboard', async () => {
  // Write code here that turns the phrase above into concrete actions
  await expect( await loginPage.getHomeTitle()).toBeVisible({ timeout: 5000 });
})

When('User click on remember me checkbox', () => {
  // Write code here that turns the phrase above into concrete actions
   loginPage.clickRememberMeCheckbox();
})

Then('user receive error message as {string}', async (expectedMessage: string) => {
  // Write code here that turns the phrase above into concrete actions
   await expect( await loginPage.errorMessage(expectedMessage)).toHaveText(expectedMessage);
})



When('User click on {string} button', async (btn: string) => {
  // Write code here that turns the phrase above into concrete actions
 await loginPage.clickButton(btn);
})

When('User click on {string} menu', async (menus: string) => {
  await loginPage.clickMenu(menus);
})




When('User enter invalid email as {string}', async (email: string) => {
  // Write code here that turns the phrase above into concrete actions
  await loginPage.enterEmail(email);
})

Then('User should see a success message {string}', async (successmessage: string) => {
  // Write code here that turns the phrase above into concrete actions
  await expect( await loginPage.successFulMessage(successmessage)).toHaveText(successmessage);
})



When('User enter tags as {string}', async (tags: string) => {
  // Write code here that turns the phrase above into concrete actions
  await loginPage.enterTags(tags);
})

When('User select category as {string}', async (category: string) => {
  // Write code here that turns the phrase above into concrete actions
  await loginPage.selectCategory(category);
})

When('User upload file {string}', async (filename: string) => {
  // Write code here that turns the phrase above into concrete actions
  await loginPage.uploadFile(filename);
})

When('User click fileUrl and isPublished', async () => {
  // Write code here that turns the phrase above into concrete actions
  await loginPage.clickFileUrlAndIsPublished();
})

When('User enter description as {string}', async  (descrip: string) => {
  // Write code here that turns the phrase above into concrete actions
  await loginPage.enterDescription(descrip);
})

When('User enter fileUrl as {string}', async (fileUrl: string) => {
  // Write code here that turns the phrase above into concrete actions
  await loginPage.enterFileUrl(fileUrl);
})

When('User enter title as {string}', async (title: string) => {
  // Write code here that turns the phrase above into concrete actions
  await loginPage.enterTitle(title);
})

When('User click on Add Resource button', async () => {
  // Write code here that turns the phrase above into concrete actions
  await loginPage.addResource();
})

When('User uncheck the Publish immediately checkbox',async () => {
  // Write code here that turns the phrase above into concrete actions
  await loginPage.uncheckPublish();
})

Then('User should be redirected to library page', async () => {
  // Write code here that turns the phrase above into concrete actions
  await expect( await loginPage.libraryPage()).toBeVisible({ timeout: 5000 });

})

When('User click on x button', async () => {
  // Write code here that turns the phrase above into concrete actions
  await loginPage.close();
})

Then('User should see the search result with title', async () => {
  // Write code here that turns the phrase above into concrete actions
   await expect( await loginPage.resultTitle()).toBeVisible({ timeout: 5000 });
})

When('User enter title or url as {string}', async (titleorurl: string) => {
  // Write code here that turns the phrase above into concrete actions
  await loginPage.enterSearchTerm(titleorurl);
})

When('User select {string} option', async (option: string) => {
  // Write code here that turns the phrase above into concrete actions
  await loginPage.selectSearchOption(option);
})

Then('User should see the search results resources', async () => {
  // Write code here that turns the phrase above into concrete actions
  await expect( await loginPage.resultOptions()).toBeVisible({ timeout: 5000 });
})

When('User click on {string} dropdown', async (drop: string) => {
  // Write code here that turns the phrase above into concrete actions
  await loginPage.clickSearchDropdown(drop);
})



