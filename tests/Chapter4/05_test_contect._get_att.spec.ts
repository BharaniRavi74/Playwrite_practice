//import Playwright

import { test, expect } from "@playwright/test"

//test case declaration
test('First test', async ({ page }) => {
    await test.step('Get text and get attribute', async () => {
        await page.goto('https://the-internet.herokuapp.com/');
    })

    await test.step('text content of an attribute', async () => {
       const text= await page.locator('[href="/abtest"]').textContent();
       console.log(`Text: "${text}"`);
    });
});

test('Inner text validation', async ({ page }) => {
    await test.step('Get text and get attribute', async () => {
        await page.goto('https://the-internet.herokuapp.com/');
    })

    await test.step('text content of an attribute', async () => {
       const text= await page.locator('[href="/abtest"]').innerText();
       console.log(`Text: "${text}"`);
       const text2= await page.getByText('Welcome to the-internet').getAttribute('class');
       console.log(`Attribute value ${text2} `)

    });


    });