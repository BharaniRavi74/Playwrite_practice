//import Playwright

import { test, expect } from "@playwright/test"

//test case declaration
test('Date Picker', async ({ page }) => {
    await test.step('open the url', async () => {
    await page.goto('https://demoqa.com/date-picker');
    })

    await test.step('click and clear the current date ', async () => {
    
        await page.locator('//input[@id="datePickerMonthYearInput"]').click();
        await page.locator('//input[@id="datePickerMonthYearInput"]').clear();
        
    });
    await test.step('Select current date', async () => {

        await page.locator('//div[contains(@class,"datepicker__day--today")]').click();
      
    })
      await test.step('Select past date', async () => {
  await page.locator('//input[@id="datePickerMonthYearInput"]').click();
       
       // await page.locator('//div[contains(@class,"datepicker__day--today")]').click();
      await page.getByLabel('Previous Month').click();
      await page.locator('text="12"').first().click();
    })

    });
