import { Locator, Page } from "@playwright/test";
// import path from "path";
// import process from "node:process";

export class LoginPage {
    constructor(private page: Page) {}
       // Locators
  passwordInput =() => this.page.locator('input[id="password"]');
  emailInput = () =>  this.page.locator('input[id="email"]');
  forgotPswclick  = (forgotpsw: string) => this.page.locator(`a:has-text("${forgotpsw}")`);
  resetButton = (restbtn: string) => this.page.locator(`button:has-text("${restbtn}")`);
  clickLoginBtn = () =>  this.page.locator('button[type="submit"]');
  clickRememberMe = () => this.page.locator('input[id="remember"]');
  homeTitle = () => this.page.locator('img[class="object-contain w-full"]');
  verified = () => this.page.getByText('Verify Your Email');
 clickBtn = (btn: string) => this.page.locator(`button:has-text("${btn}")`);
 errorLocator = (expectedMessage: string) => this.page.getByText(expectedMessage);

    async navigate() {
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

    

    async clickLoginButton(): Promise<void> {
        return await this.clickLoginBtn().click();
    }

    async clickRememberMeCheckbox(): Promise<void> {
        return await this.clickRememberMe().click();
    }

    async getHomeTitle(): Promise<Locator> {
      
        return await this.homeTitle();
    }

    async errorMessage(expectedMessage: string): Promise<Locator> {
       
        return await this.errorLocator(expectedMessage);
    }

    async getVerified(): Promise<Locator> {
       
        return await this.verified();
    }

}