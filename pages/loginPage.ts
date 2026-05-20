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
  homeTitle = () => this.page.locator('img[class="object-contain w-full"]');
 clickBtn = (btn: string) => this.page.locator(`button:has-text("${btn}")`);
 firstNameInput = () => this.page.locator('[id="user-firstName"]');
 pickROles = () => this.page.locator('div[class="space-y-2"] [type="button"]');
 lastNameInput = () => this.page.locator('[id="user-lastName"]');
 dOB = () => this.page.getByRole('textbox', { name: 'Date of birth (optional)' });
 strongPassword = () => this.page.locator('input[id="user-password"]');
 randomemail = () => this.page.locator('input[id="user-email"]');
 errorLocator = (expectedMessage: string) => this.page.getByText(expectedMessage);
success = (successmessage: string) => this.page.getByText(successmessage);
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
    async clickLoginButton(): Promise<void> {
        return await this.clickLoginBtn().click();
    }

    async clickRememberMeCheckbox(): Promise<void>  {
        return await this.clickRememberMe().click();
    }

    async getHomeTitle(): Promise<Locator> {
        
        return await this.homeTitle();
    }

    async errorMessage(expectedMessage: string): Promise<Locator> {
        
        return await this.errorLocator(expectedMessage);
    }

    async successFulMessage(successmessage: string): Promise<Locator> {
        
        return await this.success(successmessage);
    }

}