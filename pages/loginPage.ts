import { Locator, Page } from "@playwright/test";
// import path from "path";
// import process from "node:process";


export class LoginPage {
    constructor(private page: Page) {}
    // Define locators as methods
     passwordInput =() => this.page.locator('input[id="password"]');
  emailInput = () =>  this.page.locator('input[id="email"]');
  clickLoginBtn = () =>  this.page.locator('button[type="submit"]');
  clickRememberMe = () => this.page.locator('input[id="remember"]');
  pickTime = () => this.page.getByRole('textbox', { name: 'Time' });
  selectDurations = () => this.page.getByRole('spinbutton', { name: 'Duration (minutes)' });
  classTitles = () => this.page.locator('input[id="class-title"]');
  pickDates = () => this.page.getByRole('textbox', { name: 'Date' });
  homeTitle = () => this.page.locator('img[class="object-contain w-full"]');
 clickBtn = (btn: string) => this.page.locator(`button:has-text("${btn}")`);
 errorLocator = (expectedMessage: string) => this.page.getByText(expectedMessage);
  success = (successmessage: string) => this.page.getByText(successmessage);
  menuButton = (menu: string) => 
    this.page.locator(`span:has-text("${menu}")`);

      generateRandomName() { 

        const durations = ["15","30", "40", "45", "60","90","120"];
        const mins = ["01", "02", "03", "04", "05","04","05", "06", "07", "08", "09","10","11", "12","13", "14", "15", "16", "17","18"];
        const hours = ["01", "02", "03", "04", "05","04","05", "06", "07", "08", "09","10","11", "12","13", "14", "15", "16", "17","18"];
        // const dates = ["01", "02", "03", "04", "05","04","05", "06", "07", "08", "09","10","11", "12","13", "14", "15", "16", "17","18"];
        // const dates = ["01", "02", "03", "04", "05","04","05", "06", "07", "08", "09","10","11", "12","13", "14", "15", "16", "17","18"];

        const duration = durations[Math.floor(Math.random() * durations.length)];
        const min = mins[Math.floor(Math.random() * mins.length)];
        const hour = hours[Math.floor(Math.random() * hours.length)];
       

        return { duration, min, hour };
    }

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

    async picktimes() {
        let { hour, min } = this.generateRandomName();
        return await this.pickTime().fill(`${hour}:${min}`);
    }
    async selectDuration() {
        let { duration} = this.generateRandomName();
        return await this.selectDurations().fill(`${duration}`);
    }

    async classTitle(classtitle: string) {
        return await this.classTitles().fill(classtitle);
    }

    async selectDate() {
        const date = new Date();

      // Add 2 days (day after tomorrow)
      date.setDate(date.getDate() + 2);

     // Format as YYYY-MM-DD
      const formattedDate = date.toISOString().split('T')[0];
        return await this.pickDates().fill(formattedDate);
    }

    async getHomeTitle(): Promise<Locator> {
        let homeTitle = await this.homeTitle(); 
        return homeTitle;
    }

    async errorMessage(expectedMessage: string): Promise<Locator> {
        let errorLocator = await this.errorLocator(expectedMessage); 
        return errorLocator;
    }

    async successFulMessage(successmessage: string): Promise<Locator> {
        
        return await this.success(successmessage);
    }

}