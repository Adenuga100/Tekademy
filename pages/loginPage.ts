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



}



