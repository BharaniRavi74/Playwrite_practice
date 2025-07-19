//import Playwright

import { test, expect } from "@playwright/test"

//test case declaration
test('Mouse actions demo', async ({ page, browser }) => {
    const context1 = await browser.newContext();
    const page2 = await context1.newPage();

    await test.step('open the url', async () => {
        await page.goto('https://demoqa.com/buttons');
    })

    await test.step('Double click ,Right click,Click ', async () => {
        //double click
        await page.getByRole("button", { name: 'Double Click Me' }).dblclick();

        //rightClick
        await page.getByRole("button", { name: 'Right Click Me' }).click({ button: 'right' });
        //await page
        //hover is for hovering over the element


    });
    await test.step('Mouse over and drag and Drop ', async () => {
        await page.goto('https://demoqa.com/droppable/');
        await page.locator('//a[text()="Prevent Propogation"]').hover();

    })

    //open new browser session  using contect 
    await test.step('Open new tab', async () => {

        await page2.goto('https://demoqa.com');
    })

    //open new tab using new page object 
    await test.step('Open new tab', async () => {

        const page3 = await context1.newPage();
        await page3.goto('https://demoqa.com');
    })

});
