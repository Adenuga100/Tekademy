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




// When('User click on {string} menu', async (menus: string) => {
//   await loginPage.clickMenu(page, menus);
// })







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



Then('user receive an alert duration message as {string}', async (durationMessage: string) => {
  // Write code here that turns the phrase above into concrete actions
  const validationMessage = await loginPage.alertDurationMessage(durationMessage);
  expect(validationMessage).toBe(durationMessage);
})