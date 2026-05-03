import { Locator, Page } from "@playwright/test";
// import path from "path";
// import process from "node:process";
 passwordInput =() => this.page.locator('input[id="password"]');
  emailInput = () =>  this.page.locator('input[id="email"]');
  clickLoginBtn = () =>  this.page.locator('button[type="submit"]');
  clickRememberMe = () => this.page.locator('input[id="remember"]');
  homeTitle = () => this.page.locator('img[class="object-contain w-full"]');
 clickBtn = (btn: string) => this.page.locator(`button:has-text("${btn}")`);
 errorLocator = (expectedMessage: string) => this.page.getByText(expectedMessage);
  success = (successmessage: string) => this.page.getByText(successmessage);
  menuButton = (menu: string) => 
    this.page.locator(`span:has-text("${menu}")`);

export class LoginPage {
    constructor(private page: Page) {}

    async navigate() {
        await this.page.goto('https://tk-academy-admin.vercel.app/auth/login');
    }

    async enterPassword(password: string) {
        return this.passwordInput().fill(password);
    }

    async enterEmail(email: string) {
        return this.emailInput().fill(email);
    }

    async clickLoginButton() {
        return await this.clickLoginBtn().click();
    }
 async clickMenu(menu: string) {
   await this.menuButton(menu).scrollIntoViewIfNeeded();
   return await this.menuButton(menu).click();
  }
  
   async clickButton(btn: string) {
    await this.clickBtn(btn).scrollIntoViewIfNeeded();
    return await this.clickBtn(btn).click();
 }
    async clickRememberMeCheckbox() {
        return await this.clickRememberMe().click();
    }

    async getHomeTitle(): Promise<Locator> {
        let homeTitle = await this.homeTitle(); 
        return homeTitle;
    }

    async errorMessage(expectedMessage: string): Promise<Locator> {
        let errorLocator = await this.errorLocator(expectedMessage); 
        return errorLocator;
    }

}