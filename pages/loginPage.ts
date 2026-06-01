import { Locator, Page } from "@playwright/test";
// import { page } from "../hooks/hook";
// import path from "path";
// import process from "node:process";


export class LoginPage {

    constructor(private page: Page) {}
       // Locators
//   passwordInput =() => this.page.locator('input[id="password"]');
//   emailInput = () =>  this.page.locator('input[id="email"]');
//   forgotPswclick  = (forgotpsw: string) => this.page.locator(`a:has-text("${forgotpsw}")`);
//   resetButton = (restbtn: string) => this.page.locator(`button:has-text("${restbtn}")`);
//   clickLoginBtn = () =>  this.page.locator('button[type="submit"]');
//   clickRememberMe = () => this.page.locator('input[id="remember"]');
//   homeTitle = () => this.page.locator('img[class="object-contain w-full"]');
//   verified = () => this.page.getByText('Verify Your Email');
//  clickBtn = (btn: string) => this.page.locator(`button:has-text("${btn}")`);
//  errorLocator = (expectedMessage: string) => this.page.getByText(expectedMessage);

    // Define locators as methods
    passwordInput() {
     return this.page.locator('input[id="password"]');
    }

    emailInput() {
     return this.page.locator('input[id="email"]');
    }
    
    resetButton(restbtn: string) {
     return this.page.locator('input[type="submit"]');
    }

    forgotPswclick(forgotpsw: string) {
     return this.page.locator(`a:has-text("${forgotpsw}")`);
    }
   


     

    async navigate(): Promise<void>  {
     await this.page.goto('https://tk-academy-admin.vercel.app/auth/login');
    }

    async enterPassword(password: string): Promise<void> {
        return await this.passwordInput().fill(password);
    }

    async enterEmail(email: string): Promise<void> {
        return await this.emailInput().fill(email);
    }

    async forgetPassword(forgotpsw: string): Promise<void> {
        return await this.forgotPswclick(forgotpsw).click();
    }

    async resetBtn(restbtn: string): Promise<void> {
        return await this.resetButton(restbtn).click();
    }

    

  

    async alertMessage(alertmessage: string): Promise<string> {
      // 1. Locate the specific input element (e.g., your email or password input)
      const dateField = this.page.locator('input[id="class-title"]'); // Adjust the selector as needed
    
      // 2. Evaluate and return the HTML5 validation message string
      return await dateField.evaluate((el: HTMLInputElement) => el.validationMessage);
    }

    async alertDateMessage(alerdateMessage: string): Promise<string> {
      // 1. Locate the specific input element (e.g., your email or password input)
      const dateField = this.page.getByRole('textbox', { name: 'Date' }); // Adjust the selector as needed
    
      // 2. Evaluate and return the HTML5 validation message string
      return await dateField.evaluate((el: HTMLInputElement) => el.validationMessage);
    }

    async alertTimeMessage(alertimetmessage: string): Promise<string> {
      // 1. Locate the specific input element (e.g., your email or password input)
      const timeField = this.page.getByRole('textbox', { name: 'Time' }); // Adjust the selector as needed
    
      // 2. Evaluate and return the HTML5 validation message string
      return await timeField.evaluate((el: HTMLInputElement) => el.validationMessage);
    }

    async alertDurationMessage(alertimetmessage: string): Promise<string> {
      // 1. Locate the specific input element (e.g., your email or password input)
      const durationField = this.page.getByRole('spinbutton', { name: 'Duration (minutes)' }); // Adjust the selector as needed
    
      // 2. Evaluate and return the HTML5 validation message string
      return await durationField.evaluate((el: HTMLInputElement) => el.validationMessage);
    }

}



