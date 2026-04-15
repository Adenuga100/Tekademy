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
 dOB = () => this.page.locator('input[id="user-dateOfBirth"]');
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

        const first = firstNames[Math.floor(Math.random() * firstNames.length)];
        const last = lastNames[Math.floor(Math.random() * lastNames.length)];

        return { first, last };
    }
  // Actions
  async navigate() {
    await this.page.goto('https://tk-academy-admin.vercel.app/auth/login');
  }

    async enterPassword(password: string) {
       return await this.passwordInput().fill(password);
    }

  async enterEmail(email: string) {
    return await this.emailInput().fill(email);
  }

  async clickMenu(menu: string) {
   return await this.menuButton(menu).click();
  }
  
   async clickButton(btn: string) {

    return await this.clickBtn(btn).click();
 }



async selectRole(numberToClick: number = 1) {
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




    async enterFirstName() {
        let {first} = this.generateRandomName();

      return await this.firstNameInput().fill(first);
      
    }

    async enterLastName() {
        let {last} = this.generateRandomName();

      return await this.lastNameInput().fill(last); 
    }

    async enterDOB() {
        // let {last} = this.generateRandomName();

      return await this.dOB().fill('02/02/2000');
      
    }

    async password(psw: string) {
        return await this.strongPassword().fill(psw);
      
    }

    async randonmEmail() {
        let email = `use_${crypto.randomUUID()}@testmail.com`;
   
        return await this.randomemail().fill(email);
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
        
        return await this.errorLocator(expectedMessage);
    }

    async successFulMessage(successmessage: string): Promise<Locator> {
        
        return await this.success(successmessage);
    }

}