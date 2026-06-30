import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from '@playwright/test';
import { LoginPage } from "../pages/loginPage";
// import { } from '../hooks/hook';

// 1. Declare the variable at the top (without 'this')
let loginPage: LoginPage;
Given('I navigate to the login page', async function () {
    // Pass the page initialized in your hooks (this.page!) to the constructor
   loginPage = new LoginPage(this.page!);
    await loginPage.navigate();
});

// Given('I navigate to the login page', async () => {
//     loginPage = new LoginPage(page);
//     await loginPage.navigate();
// });


When('User enter valid password as {string}', async function ( pass: string) {
  // Write code here that turns the phrase above into concrete actions
  // await loginPage.enterPassword(this.page!, pass);
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



Then('user receive error message as {string}', async (expectedMessage: string) => {
  // Write code here that turns the phrase above into concrete actions
   await expect( await loginPage.errorMessage(expectedMessage)).toHaveText(expectedMessage, { timeout: 1000 });
})


When('User enter invalid email as {string}', async (email: string) => {
  // Write code here that turns the phrase above into concrete actions
  await loginPage.enterEmail(email);
})

Then('User should see an error message {string}', (s: string) => {
  // Write code here that turns the phrase above into concrete actions

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
  await expect( await loginPage.successFulMessage(successmessage)).toHaveText(successmessage, { timeout: 2000 });
})



When('User enter email as', async () => {
  // Write code here that turns the phrase above into concrete actions
  await loginPage.randonmEmail();
})


When('User enter first name', async () => {
  // Write code here that turns the phrase above into concrete actions
  await loginPage.enterFirstName();
})

When('User enter last name', async () => {
  // Write code here that turns the phrase above into concrete actions
  await loginPage.enterLastName();
})

When('User enter strong password as {string}', async(psw: string) => {
  // Write code here that turns the phrase above into concrete actions
  await loginPage.password(psw);
})

When('User enter DOB',async () => {
  // Write code here that turns the phrase above into concrete actions
  await loginPage.enterDOB();
})

When('User select any role',async () => {
  // Write code here that turns the phrase above into concrete actions
  await loginPage.selectRole();
})



