// src/step-definitions/login.steps.ts
import { Given, When, Then } from '@cucumber/cucumber';
import { chromium } from 'playwright';
import { expect } from '@playwright/test';
import { CustomWorld } from '../support/world'; // adjust path if needed

When('I go to {string}', async function (this: CustomWorld, url: string) {
  await this.page.goto(url, { timeout: 30000 });
  await this.page.waitForLoadState('networkidle');
});

When('I enter the username {string}', async function (this: CustomWorld, username: string) {
  await this.page.getByPlaceholder("Enter your username").fill(username);
  await this.page.waitForTimeout(2000);
});

When('I enter the password {string}', async function (this: CustomWorld, password: string) {
  await this.page.getByPlaceholder("Enter your password").fill(password);
  await this.page.waitForTimeout(2000);
});

When('click on login button', async function (this: CustomWorld) {
  await this.page.getByText("Login").last().click();
  await this.page.waitForTimeout(2000);
});
