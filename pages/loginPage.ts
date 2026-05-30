import { Locator, Page } from "@playwright/test";
// import { page } from "../hooks/hook";
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
        let homeTitle = await this.homeTitle(); 
        return homeTitle;
    }

    async errorMessage(expectedMessage: string): Promise<Locator> {
        let errorLocator = await this.errorLocator( expectedMessage); 
        return errorLocator;
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



