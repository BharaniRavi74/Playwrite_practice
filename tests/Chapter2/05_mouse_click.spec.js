//import Playwright

import { test, expect } from "@playwright/test"

//test case declaration
test('Mouse actions demo', async ({ page }) => {
    await test.step('open the url', async () => {
    await page.goto('https://demoqa.com/buttons');
    })

    await test.step('Double click ,Right click,Click ', async () => {
        //double click
        await page.getByRole("button",{name :'Double Click Me'}).dblclick();

        //rightClick
         await page.getByRole("button",{name :'Right Click Me'}).click({button:'right'});
        //await page
        //hover is for hovering over the element


    });
    await test.step('Mouse over and drag and Drop ', async () => {
      await page.goto('https://demoqa.com/droppable/');
      await page.locator('//a[text()="Prevent Propogation"]').hover();
      
    })

    });
