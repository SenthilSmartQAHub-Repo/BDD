// src/support/world.ts
import { setWorldConstructor, setDefaultTimeout, World, IWorldOptions } from '@cucumber/cucumber';
import { Browser, Page } from 'playwright';


setDefaultTimeout(60 * 1000); // 60 seconds timeout

export class CustomWorld extends World {
  browser!: Browser;
  page!: Page;


}

setWorldConstructor(CustomWorld);
