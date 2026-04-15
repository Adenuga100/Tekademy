import { Before, After, BeforeAll, AfterAll, setDefaultTimeout  } from "@cucumber/cucumber";
import { chromium, Browser, Page } from "@playwright/test";
import { CustomWorld } from '../hooks/world';


setDefaultTimeout(60 * 1000); // 60 seconds

let browser: Browser;
let page: Page;

// Before(async function () {
//     browser = await chromium.launch({ headless: false });
//     const context = await browser.newContext();
//     this.page = await context.newPage(); // 'this' shares the page with step definitions
// });
Before(async function () {
    const isCI = !!process.env.CI;
   browser = await chromium.launch({ headless: isCI });
    // browser = await chromium.launch({ headless: true }); // GitHub needs headless: true
    this.context = await browser.newContext();
    this.page = await this.context.newPage(); 
});

After(async function () {
    // Adding the '?' ensures it only tries to close if the object exists
    await this.page?.close();
    await this.context?.close();
    
    // browser is usually a global variable in this file
    if (browser) {
        await browser.close();
    }
});