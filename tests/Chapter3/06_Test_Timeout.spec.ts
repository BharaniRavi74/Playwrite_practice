// Import playwright module
import { test, expect } from '@playwright/test';
import { TIMEOUT } from 'dns';

/**
 * Author Bharani 
 */
test('Visual Comparison in Playwright', async ({ page }) => {
    //Test timeouts
   test.setTimeout(1*60*1000);
    // Go to URL
    await page.goto('https://github.com/login');

    //Action Timeout 
    await page.getByRole("button",{name:'Signin'}).click({timeout:20000});
    

    // globel assertion timeout is set in Playwright.ts file to set local timeout we use timeouts
   // await expect(page).toHaveTitle('Sign in to GitHub ahsbdkb',{timeout:2000});

    // Test timeouts
    //await page.waitForTimeout(60000);
});

