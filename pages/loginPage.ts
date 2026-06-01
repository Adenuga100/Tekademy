import { Locator, Page } from "@playwright/test";
// import { page } from "../hooks/hook";
// import path from "path";
// import process from "node:process";


export class LoginPage {

    constructor(private page: Page) {}

    // Define locators as methods
    passwordInput() {
     return this.page.locator('input[id="password"]');
    }

    emailInput() {
     return this.page.locator('input[id="email"]');
    }

    clickLoginBtn() {
     return this.page.locator('button[type="submit"]');
    }

    clickRememberMe() {
     return this.page.locator('input[id="remember"]');
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
    
    clickBtn(btn: string) {
     return this.page.locator(`button:has-text("${btn}")`);
    }
     

    menuButton( menu: string) {
        // return this.page.locator(`text=${menu}`);
        return this.page.getByRole('link', { name: menu });
    }

    generateRandomName() { 

        const durations = ["15","30", "60","90","120"];
        const mins = ["01", "02", "03", "04", "05","04","05", "06", "07", "08", "09","10","11", "12","13", "14", "15", "16", "17","18"];
        const hours = ["01", "02", "03", "04", "05","04","05", "06", "07", "08", "09","10","11", "12","13", "14", "15", "16", "17","18"];
         const newdates = ["1", "2", "3", "4", "5","4","5", "6", "7"];
        // const dates = ["01", "02", "03", "04", "05","04","05", "06", "07", "08", "09","10","11", "12","13", "14", "15", "16", "17","18"];

        const duration = durations[Math.floor(Math.random() * durations.length)];
        const min = mins[Math.floor(Math.random() * mins.length)];
        const hour = hours[Math.floor(Math.random() * hours.length)];
        const newdate = newdates[Math.floor(Math.random() * newdates.length)];
       

        return { duration, min, hour, newdate };
    }

     

    async navigate(): Promise<void>  {
     await this.page.goto('https://tk-academy-admin.vercel.app/auth/login');
    }
  // Actions
  async navigate() {
    return await this.page.goto('https://tk-academy-admin.vercel.app/auth/login');
  }

    async enterPassword(password: string): Promise<void>  {
        return await this.passwordInput().fill(password);
    }

    async enterEmail(email: string): Promise<void>  {
        return await this.emailInput().fill(email);
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

    async successFulMessage(successmessage: string): Promise<Locator> {
        
        return await this.success(successmessage);
    }

   
    async clickMenu(menu: string): Promise<void> {
      await this.menuButton( menu).scrollIntoViewIfNeeded();
      return await this.menuButton(menu).click();
    }


  
    async clickButton(btn: string): Promise<void>  {
       await this.clickBtn(btn).scrollIntoViewIfNeeded();
       return await this.clickBtn(btn).click();
    }
   

    async picktimes(): Promise<void>  {
        let { hour, min } = this.generateRandomName();
        return await this.pickTime().fill(`${hour}:${min}`);
    }

    async selectDuration(): Promise<void>  {
        let { duration} = this.generateRandomName();
        return await this.selectDurations().fill(`${duration}`);
    }

    async enterDuration(dura: string): Promise<void>  {
        return await this.selectDurations().fill(dura);
    }

    async classTitle(classtitle: string): Promise<void>  {
        return await this.classTitles().fill(classtitle);
    }

    async selectDate(): Promise<void> {
        let { newdate} = this.generateRandomName();
        const date = new Date();
    
      // Add 2 days (day after tomorrow)
      date.setDate(date.getDate() + parseInt(`${newdate}`));

     // Format as YYYY-MM-DD
      const formattedDate = date.toISOString().split('T')[0];
        return await this.pickDates().fill(formattedDate);
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



