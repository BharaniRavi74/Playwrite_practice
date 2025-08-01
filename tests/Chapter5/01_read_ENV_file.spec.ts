//import Playwright

import { test, expect } from "@playwright/test"

test(' type', async ({ page }) => {
    await test.step('Navigate to URL', async () => {
        await page.goto(`${process.env.URL}`);
    })

    await test.step('repos link', async () => {
        const yeslabel=await page.locator('[type="checkbox"]').first();
      await yeslabel.check();
     
    });

    
});
