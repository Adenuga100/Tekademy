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
  // Actions
  async navigate() {
    return await this.page.goto('https://tk-academy-admin.vercel.app/auth/login');
  }

    async enterPassword(password: string): Promise<void> {
       return await this.passwordInput().fill(password);
    }

  async enterEmail(email: string): Promise<void> {
    return await this.emailInput().fill(email);
  }

  async clickMenu(menu: string): Promise<void> {
   return await this.menuButton(menu).click();
  }
  
   async clickButton(btn: string): Promise<void> {

    return await this.clickBtn(btn).click();
 }



async selectRole(numberToClick: number = 1): Promise<void> {
    // 1. Locate all checkboxes (no Thread.Sleep needed, Playwright waits automatically)
    const checkboxes = this.pickROles();
    
    // 2. Get the total count
    const totalCount = await checkboxes.count();
    
    // 3. Ensure we don't click more than available
    const finalNumberToClick = Math.min(numberToClick, totalCount);

    // 4. Create a list of indices and shuffle them
    const indices = Array.from({ length: totalCount }, (_, i) => i);
    const shuffled = indices.sort(() => 0.5 - Math.random());

    // 5. Click the checkboxes based on shuffled indices
    for (let i = 0; i < finalNumberToClick; i++) {
        const randomIndex = shuffled[i];
        // Use .nth() to pick the specific checkbox and click it
        await checkboxes.nth(randomIndex).click();
    }
}




    async enterFirstName(): Promise<void> {
        let {first} = this.generateRandomName();

      return await this.firstNameInput().fill(first);
      
    }

    async enterLastName(): Promise<void> {
        let {last} = this.generateRandomName();

      return await this.lastNameInput().fill(last); 
    }

    async enterDOB(): Promise<void> {
        let {year} = this.generateRandomName();
        let {month} = this.generateRandomName();
        let {date} = this.generateRandomName();

      return await this.dOB().fill(`${year}-${month}-${date}`);

      
    }

    async password(psw: string): Promise<void> {
        return await this.strongPassword().fill(psw);
      
    }

    async randonmEmail(): Promise<void> {
        let email = `use_${crypto.randomUUID()}@testmail.com`;
   
        return await this.randomemail().fill(email);
    }
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
    async unClick(): Promise<Locator> {
        
        return await this.clickAddResource();
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