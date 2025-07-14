//import Playwright

import { test, expect } from "@playwright/test"

//test case declaration
test('JQuery site navigate', async ({ page }) => {
    await test.step('open the url', async () => {
    await page.goto('https://jqueryui.com/droppable/');
    })

    await test.step('Navigate to Iframe and do a drag and drop ', async () => {
        const iframe= page.frameLocator('//iframe[@class="demo-frame"]');
        const dragable= iframe.locator('#draggable');
        const dropable=iframe.locator('#droppable')
        await dragable.dragTo(dropable);
    });
    await test.step('validate the page title', async () => {
       // await expect(page).toHaveTitle('The Internet');
        await page.close();
    })

    });
