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

<<<<<<< HEAD
    clickDropdownse(drop: string) {
     return this.page.getByRole('combobox').filter({ hasText: `${drop}` });
    }

    selectOptionLocator(options: string) {
        return this.page.getByRole('option', { name: `${options}` }).first(); // Adjust the locator as needed
    }

    files() {
     return this.page.locator('input[type="file"]');
    }

    clickFileUrlAndIsPublisheddFile() {
     return this.page.locator('input[type="checkbox"]');
    }

    closeX() {
     return this.page.locator('button[data-slot="dialog-close"]');
    }

    clickLoginBtn() {
     return this.page.locator('button[type="submit"]');
    }
=======
    
>>>>>>> origin/main

    fillTitle() {
     return this.page.locator('input[id="resource-title"]');
    }

    category() {
        return this.page.locator('//button[@id="resource-category"]/following-sibling::select');
    }
    // clickAddResource() {
    //  return this.page.locator('button[type="submit"]');
    // }
    // unCheck() {
    //  return this.page.locator('input[type="checkbox"]');
    // }
    fillTittleOrUrl() {
      return this.page.locator('input[placeholder="Search resources by title or URL..."]');
    }

    resultTitles(titleorurl: string) {
     return this.page.locator('p[class="font-medium text-[#111827]"]').first();
    }

    resultOption(option: string) {
     return this.page.locator(`//td[@data-slot="table-cell"]//span[text()='${option}']`).first();
    }

    fillDescription() {
     return this.page.locator('textarea[id="resource-description"]');
    }

    fillTags() {
     return this.page.locator('input[id="resource-tags"]');
    }

    fillFileUrl() {
     return this.page.locator('input[type="url"]');
    }
    libraryPages() {
     return this.page.getByText('Library & Resources');
    }
    clickRememberMe() {
     return this.page.locator('input[id="remember"]');
    }

    clickAddResource() {
     return this.page.locator('button[type="submit"]');
    }

    unCheck() {
     return this.page.locator('input[type="checkbox"]');
    }

    homeTitle() {
     return this.page.locator('img[class="object-contain w-full"]');
    }

    errorLocator(expectedMessage: string) {
     return this.   page.getByText(expectedMessage);
    }

    success(successmessage: string) {
     return this.page.getByText(successmessage);
    }

    pickTime() {
     return this.  page.getByRole('textbox', { name: 'Time' });
    }

    selectDurations() {
     return this.page.getByRole('spinbutton', { name: 'Duration (minutes)' });
    }

    classTitles() {
     return this.page.locator('input[id="class-title"]');
    }

    pickDates() {
     return this.page.getByRole('textbox', { name: 'Date' });
    }

    clickLoginBtn() {
     return this.page.locator('button[type="submit"]');
    }

    firstNameInput() {
     return this.page.locator('input[id="user-firstName"]');
    }

    randomemail() {
     return this.page.locator('input[id="user-email"]');
    }

    lastNameInput() {
     return this.page.locator('input[id="user-lastName"]');
    }

    dOB() {
     return this.page.locator('input[id="user-dateOfBirth"]');
    }
    
    strongPassword() {
     return this.page.locator('input[type="password"]');
    }
    
    clickBtn(btn: string) {
     return this.page.locator(`button:has-text("${btn}")`);
    }

    pickROles() {
     return this.page.locator('[class="flex flex-wrap gap-2"] [type="button"]');
    }

    menuButton( menu: string) {
        // return this.page.locator(`text=${menu}`);
        return this.page.getByRole('link', { name: menu });
    }


    generateRandomName() { 

        const firstnames = ["James","Michael", "David","Sarah"];
        const lastnames = ["Williams", "Johnson", "Brown", "Davis"];
        const years = ["1990", "2000", "2001", "2002", "2003","2004","2005", "2006", "2007", "2008", "2009","2010","2011", "2012","2013"];
        const months = ["01", "02", "03", "04", "05","04","05", "06", "07"];
        const dates = ["01", "02", "03", "04", "05","04","05", "06", "07", "08", "09","10","11", "12","13", "14", "15", "16", "17","18"];

        const first = firstnames[Math.floor(Math.random() * firstnames.length)];
        const last = lastnames[Math.floor(Math.random() * lastnames.length)];
        const year = years[Math.floor(Math.random() * years.length)];
        const month = months[Math.floor(Math.random() * months.length)];
        const date = dates[Math.floor(Math.random() * dates.length)];
       

        return { first, last, year, month, date };
    }

     

    async navigate(): Promise<void>  {
     await this.page.goto('https://tk-academy-admin.vercel.app/auth/login');
    }
  // Actions
 

    async enterPassword(password: string): Promise<void> {
       return await this.passwordInput().fill(password);
    }

    async clickLoginButton(): Promise<void> {
       return await this.clickLoginBtn().click();
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
 
    async errorMessage(expectedMessage: string): Promise<Locator> {
        await this.errorLocator(expectedMessage).scrollIntoViewIfNeeded();
        return await this.errorLocator(expectedMessage);
    }

    async successFulMessage(successmessage: string): Promise<Locator> {
        
        return await this.success(successmessage);
    }

<<<<<<< HEAD
    storedTitleOrUrls: string = '';


    async enterSearchTerm(titleorurl: string): Promise<void> {


       await this.fillTittleOrUrl().fill(titleorurl);

        // this.storedTitleOrUrl = await this.fillTittleOrUrl().getAttribute('value') || '';
        this.storedTitleOrUrls = titleorurl;
    }

    async resultTitle(): Promise<Locator> {
        
        return  await this.resultTitles(this.storedTitleOrUrls);
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

   

    async enterTitle(title: string) : Promise<void> {
        return await this.fillTitle().fill(title);
    }

    async addResource(): Promise<void> {
        await this.clickAddResource().scrollIntoViewIfNeeded();
        return await this.clickAddResource().click();
    }

    async uncheckPublish(): Promise<void> {
        await this.unCheck().scrollIntoViewIfNeeded();
        
        return await this.unCheck().click();
    }

    async close(): Promise<void> {
      
        return await this.closeX().click();
    }

    async clickSearchDropdown(drop: string): Promise<void> {
      
        return await this.clickDropdownse(drop).click();
    }
    



storedOption: string = '';


async selectSearchOption(option: string): Promise<void> {
    // Click the element using the locator
    await this.selectOptionLocator(option).click();

    // Store the value you just clicked for verification later
    this.storedOption = option; 
}


async selectCategory(category: string): Promise<void> {
     await this.category().selectOption({ label: category });
}

async enterDescription(description: string): Promise<void> {
    await this.fillDescription().scrollIntoViewIfNeeded();
    return await this.fillDescription().fill(description);
}

async enterFileUrl(fileUrl: string): Promise<void> {
    await this.fillFileUrl().scrollIntoViewIfNeeded();
    return await this.fillFileUrl().fill(fileUrl);
}

    async enterTags(description: string): Promise<void> {
        await this.fillTags().scrollIntoViewIfNeeded();
        return await this.fillTags().fill(description);
    }

    async uploadFile(filename: string): Promise<void> {
        await this.files().scrollIntoViewIfNeeded();
        return await this.files().setInputFiles(filename);
    }

    async clickFileUrlAndIsPublished(): Promise<void> {
        await this.clickFileUrlAndIsPublisheddFile().scrollIntoViewIfNeeded();
        return await this.clickFileUrlAndIsPublisheddFile().click();
    }
   
    async clickMenu(menu: string): Promise<void> {
      await this.menuButton( menu).scrollIntoViewIfNeeded();
      return await this.menuButton(menu).click();
    }


  
    async clickButton(btn: string): Promise<void>  {
       await this.clickBtn(btn).scrollIntoViewIfNeeded();
       return await this.clickBtn(btn).click();
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
=======

>>>>>>> origin/main

}



