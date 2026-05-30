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

When('User click on {string} button', async function (btn: string) {
  // Write code here that turns the phrase above into concrete actions
  // await loginPage.clickButton(page, btn);
  await loginPage.clickButton(btn);
})


// When('User click on {string} menu', async (menus: string) => {
//   await loginPage.clickMenu(page, menus);
// })


When('User click on {string} menu', async (menus: string) => {
    // You must pass the 'page' object to a static method
    await loginPage.clickMenu(menus); 
});

When('User enter time', async () => {
  // Write code here that turns the phrase above into concrete actions
  await loginPage.picktimes();
})


When('User enter duration', async () => {
  // Write code here that turns the phrase above into concrete actions
  await loginPage.selectDuration();
})

When('User enter class title as {string}', async (classtitle: string) => {
  // Write code here that turns the phrase above into concrete actions
  await loginPage.classTitle(classtitle);
})

Then('User should see a success message {string}', async (successmessage: string) => {
  // Write code here that turns the phrase above into concrete actions
  await expect( await loginPage.successFulMessage(successmessage)).toHaveText(successmessage);
})

When('User enter date', async () => {
  // Write code here that turns the phrase above into concrete actions
  await loginPage.selectDate();
})


Then('user receive an alert message as {string}', async (alertmessage: string) => {
  // Write code here that turns the phrase above into concrete actions
  //  await expect( await liveClassPage.alertMessage(alertmessage)).toBe(alertmessage);

  const validationMessage = await loginPage.alertMessage(alertmessage);
  expect(validationMessage).toBe(alertmessage);

})

Then('user receive an alert date message as {string}', async (dateMessage: string) => {
  // Write code here that turns the phrase above into concrete actions
  const validationMessage = await loginPage.alertDateMessage(dateMessage);
  expect(validationMessage).toBe(dateMessage);
})

Then('user receive an alert time message as {string}', async (timeMessage: string) => {
  // Write code here that turns the phrase above into concrete actions
  const validationMessage = await loginPage.alertTimeMessage(timeMessage);
  expect(validationMessage).toBe(timeMessage);
})

When('User enter duration as {string}', async (dura: string) => {
  // Write code here that turns the phrase above into concrete actions
  await loginPage.enterDuration(dura);
})

Then('user receive an alert duration message as {string}', async (durationMessage: string) => {
  // Write code here that turns the phrase above into concrete actions
  const validationMessage = await loginPage.alertDurationMessage(durationMessage);
  expect(validationMessage).toBe(durationMessage);
})

