import { Locator, Page } from "@playwright/test";
// import path from "path";
// import process from "node:process";

export class LoginPage {
    constructor(private page: Page) {}

   // Locators
  passwordInput =() => this.page.locator('input[id="password"]');
  emailInput = () =>  this.page.locator('input[id="email"]');
  clickLoginBtn = () =>  this.page.locator('button[type="submit"]');
  clickRememberMe = () => this.page.locator('input[id="remember"]');
  fillTitle = () => this.page.locator('input[id="resource-title"]');
  clickAddResource = () => this.page.locator('button[type="submit"]');
  unCheck = () => this.page.locator('input[type="checkbox"]');
  fillTittleOrUrl = () => this.page.locator('input[placeholder="Search resources by title or URL..."]');
  selectOptionLocator = (options: string) => this.page.getByRole('option', { name: `${options}` }).first(); // Adjust the locator as needed
  selectOption = () => this.page.locator('select[id="resource-category"]');
  closeX = () => this.page.locator('button[data-slot="dialog-close"]');
  fillDescription = () => this.page.locator('textarea[id="resource-description"]');
  fillTags = () => this.page.locator('input[id="resource-tags"]');
  fillFileUrl = () => this.page.locator('input[type="url"]');
  files = () => this.page.locator('input[type="file"]');
  clickFileUrlAndIsPublisheddFile = () => this.page.getByText('— fileUrl, isPublished');
  category = () => this.page.locator('//button[@id="resource-category"]/following-sibling::select');
  homeTitle = () => this.page.locator('img[class="object-contain w-full"]');
 clickBtn = (btn: string) => this.page.locator(`button:has-text("${btn}")`);
 clickDropdownse = (drop: string) => this.page.getByRole('combobox').filter({ hasText: `${drop}` });
 errorLocator = (expectedMessage: string) => this.page.getByText(expectedMessage);
  success = (successmessage: string) => this.page.getByText(successmessage);
  resultTitles = (titleorurl: string) => this.page.locator('p[class="font-medium text-[#111827]"]').first();
  resultOption = (option: string) => this.page.locator(`//td[@data-slot="table-cell"]//span[text()='${option}']`).first();
  libraryPages = () => this.page.getByText('Library & Resources');
  menuButton = (menu: string) => 
    this.page.locator(`span:has-text("${menu}")`);
//span[text()="${menu}"]
 // Drop the 'function' keyword
    generateRandomName() { 
        const firstNames = ["Alex", "Jordan", "Taylor", "Casey", "Morgan"];
        const lastNames = ["Smith", "Johnson", "Reed", "Walker", "Knight"];
        const years = ["2000", "1991", "2001", "2002", "2003","2005"];
        const months = ["01", "02", "03", "04", "05","04","05", "06", "07", "08", "09","10","11", "12"];
        const dates = ["01", "02", "03", "04", "05","04","05", "06", "07", "08", "09","10","11", "12","13", "14", "15", "16", "17","18"];

        const first = firstNames[Math.floor(Math.random() * firstNames.length)];
        const last = lastNames[Math.floor(Math.random() * lastNames.length)];
        const year = years[Math.floor(Math.random() * years.length)];
        const month = months[Math.floor(Math.random() * months.length)];
        const date = dates[Math.floor(Math.random() * dates.length)];

        return { first, last , year, month,date};
    }
  // Actions
  async navigate() {
    return await this.page.goto('https://tk-academy-admin.vercel.app/auth/login');
  }

    async enterPassword(password: string) {
       return await this.passwordInput().fill(password);
    }

  async enterEmail(email: string) {
    return await this.emailInput().fill(email);
  }

  async clickMenu(menu: string) {
   await this.menuButton(menu).scrollIntoViewIfNeeded();
   return await this.menuButton(menu).click();
  }
  
   async clickButton(btn: string) {
    await this.clickBtn(btn).scrollIntoViewIfNeeded();
    return await this.clickBtn(btn).click();
 }



    async clickLoginButton() {
        return await this.clickLoginBtn().click();
    }

    async clickRememberMeCheckbox() {
        return await this.clickRememberMe().click();
    }

    async getHomeTitle(): Promise<Locator> {
        
        return await this.homeTitle();
    }

    async errorMessage(expectedMessage: string): Promise<Locator> {
        await this.errorLocator(expectedMessage).scrollIntoViewIfNeeded();
        return await this.errorLocator(expectedMessage);
    }

    async successFulMessage(successmessage: string): Promise<Locator> {
        
        return await this.success(successmessage);
    }

    async resultTitle(): Promise<Locator> {
        
        return await this.resultTitles(this.storedTitleOrUrl);
    }

    async resultOptions(): Promise<Locator> {
        
        return await this.resultOption(this.storedOption);
    }

    async libraryPage(): Promise<Locator> {
        
        return await this.libraryPages();
    }

   

    async enterTitle(title: string) {
        return await this.fillTitle().fill(title);
    }

    async addResource() {
        await this.clickAddResource().scrollIntoViewIfNeeded();
        return await this.clickAddResource().click();
    }

    async uncheckPublish() {
        await this.unCheck().scrollIntoViewIfNeeded();
        return await this.unCheck().click();
    }

    async close() {
      
        return await this.closeX().click();
    }

    async clickSearchDropdown(drop: string) {
      
        return await this.clickDropdownse(drop).click();
    }
    

storedTitleOrUrl: string = '';

async enterSearchTerm(titleorurl: string) {

    await this.fillTittleOrUrl().fill(titleorurl);

    this.storedTitleOrUrl = await this.fillTittleOrUrl().getAttribute('value') || '';
}

storedOption: string = '';


async selectSearchOption(option: string) {
    // Click the element using the locator
    await this.selectOptionLocator(option).click();

    // Store the value you just clicked for verification later
    this.storedOption = option; 
  }


async selectCategory(category: string) {
     return await this.category().selectOption({ label: category });
}

    async enterDescription(description: string) {
        await this.fillDescription().scrollIntoViewIfNeeded();
        return await this.fillDescription().fill(description);
    }

    async enterFileUrl(fileUrl: string) {
        await this.fillFileUrl().scrollIntoViewIfNeeded();
        return await this.fillFileUrl().fill(fileUrl);
    }
    async enterTags(description: string) {
        await this.fillTags().scrollIntoViewIfNeeded();
        return await this.fillTags().fill(description);
    }

    async uploadFile(filename: string) {
        await this.files().scrollIntoViewIfNeeded();
        return await this.files().setInputFiles(filename);
    }

    async clickFileUrlAndIsPublished() {
        await this.clickFileUrlAndIsPublisheddFile().scrollIntoViewIfNeeded();
        return await this.clickFileUrlAndIsPublisheddFile().click();
    }

}