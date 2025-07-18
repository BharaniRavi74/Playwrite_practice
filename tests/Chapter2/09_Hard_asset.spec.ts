//import Playwright

import { test, expect } from "@playwright/test"

//test case declaration
test('Hard assetion', async ({ page }) => {
    await test.step('open the url', async () => {
    await page.goto('https://demoqa.com/text-box');
    })

    await test.step('is it on the screen - Visible and editable(editable by user)', async () => {
    
        await expect(page.locator('#userName')).toBeEditable();
        await expect(page.locator('#userName')).toBeVisible();
        await page.locator('#userName').fill('Bharani');

        
        
    });
    await test.step('Enabled like empty and enter the data', async () => {

        await expect(page.locator('#userEmail')).toBeEmpty();
         await expect(page.locator('#userEmail')).toBeEditable();
        await page.locator('#userEmail').fill('bharaniravi789@gmail.com');
        await page.locator('#currentAddress').fill('92,Mugil street,Arul velavannagar');
         await page.locator('#permanentAddress').fill('92,Mugil street,Arul velavannagar');
         //checking for editable to make it as failed
         await expect(page.getByRole('button',{name:'Submit'})).toBeEnabled();
         await expect(page).toHaveURL("https://demoqa.com/text-box");
         await expect(page).toHaveTitle("DEMOQA iuiu");
       //  await expect(1).toHaveProperty("2");
         await page.getByRole('button',{name:'Submit'}).click();
         await page.close();
        
    })
      

    });
