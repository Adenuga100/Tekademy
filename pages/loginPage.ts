import { Locator, Page } from "@playwright/test";
// import path from "path";
// import process from "node:process";

export class LoginPage {
    constructor(private page: Page) {}

    async navigate() {
        await this.page.goto('https://tk-academy-admin.vercel.app/auth/login');
    }

    async enterPassword(password: string) {
        return this.page.fill('input[id="password"]', password);
    }

    async enterEmail(email: string) {
        return this.page.fill('input[id="email"]', email);
    }

    async clickLoginButton() {
        return await this.page.click('button[type="submit"]');
    }

    async clickRememberMeCheckbox() {
        return await this.page.click('input[id="remember"]');
    }

    async getHomeTitle(): Promise<Locator> {
        let homeTitle = await this.page.locator('[class="object-contain w-full"]'); 
        return homeTitle;
    }

    async errorMessage(expectedMessage: string): Promise<Locator> {
        let errorLocator = await this.page.getByText(expectedMessage); 
        return errorLocator;
    }

}