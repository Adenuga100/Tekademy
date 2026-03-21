import { setWorldConstructor, World, IWorldOptions } from "@cucumber/cucumber";
import { Page, BrowserContext } from "@playwright/test";

export class CustomWorld extends World {
  page?: Page;
  context?: BrowserContext;

  constructor(options: IWorldOptions) {
    super(options);
  }
}

setWorldConstructor(CustomWorld);