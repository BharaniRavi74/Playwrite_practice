//import Playwright

import { test, expect } from "@playwright/test"

//test case declaration
test('MKeyboard Actions demo', async ({ page }) => {
    await test.step('open the url', async () => {
    await page.goto('https://www.google.com/');
    })

    await test.step('enter search text,Select All and delete', async () => {
        //search box and enter the text
        await page.locator('[title="Search"]').click();
        await page.locator('[title="Search"]').fill('Bharani Ravisankar');

        //press the enter button
        await page.locator('[title="Search"]').press('Enter');
      
         await page.goto('https://www.google.com/');
         await page.locator('[title="Search"]').fill('Bharani Ravisankar');
         await page.keyboard.press('Control+A');
         await page.keyboard.press('Delete');
          await page.keyboard.press('Tab');
         await page.keyboard.press('Enter');
         


    });
    
    });
