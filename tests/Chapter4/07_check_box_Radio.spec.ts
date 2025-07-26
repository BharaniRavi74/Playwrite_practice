//import Playwright

import { test, expect } from "@playwright/test"

test('Check box input type', async ({ page }) => {
    await test.step('Navigate to URL', async () => {
        await page.goto('https://demoqa.com/radio-button');
    })

    await test.step('repos link', async () => {
       await expect(page.getByText('Yes')).not.toBeChecked();
      const yeslabel=await page.getByText('Yes', { exact: true });
      await yeslabel.check();
      //await expect(page.getByText('Yes')).toBeChecked();
       
    });

    
});
test('Input box input type', async ({ page }) => {
    await test.step('Navigate to URL', async () => {
        await page.goto('https://the-internet.herokuapp.com/checkboxes');
    })

    await test.step('repos link', async () => {
      const yeslabel=await page.locator('[type="checkbox"]').first();
      await yeslabel.check();
       
    });

    
});
