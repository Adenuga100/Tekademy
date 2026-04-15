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
  await expect( await loginPage.getHomeTitle()).toBeVisible({ timeout: 50000 });
})

When('User click on remember me checkbox', async () => {
  // Write code here that turns the phrase above into concrete actions
   await loginPage.clickRememberMeCheckbox();
})

Then('user receive error message as {string}', async (expectedMessage: string) => {
  // Write code here that turns the phrase above into concrete actions
   await expect( await loginPage.errorMessage(expectedMessage)).toHaveText(expectedMessage);
})

Then('User should receive a password reset email', async () => {
  // Write code here that turns the phrase above into concrete actions
  await expect( await loginPage.getVerified()).toBeVisible({ timeout: 5000 });
})

When('User click on {string} button', async(restbtn: string) => {
  // Write code here that turns the phrase above into concrete actions
   await loginPage.resetBtn(restbtn);
})

When('User click on {string} link', async (forgotpsw: string) => {
  // Write code here that turns the phrase above into concrete actions
   await loginPage.forgetPassword(forgotpsw);
})

When('User enter invalid email as {string}', async (email: string) => {
  // Write code here that turns the phrase above into concrete actions
  await loginPage.enterEmail(email);
})

Then('User should see an error message {string}', (s: string) => {
  // Write code here that turns the phrase above into concrete actions
})

