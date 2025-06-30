//import Playwright

import { test, expect } from "@playwright/test"

//test case declaration
test('First test', async ({ page }) => {
    await test.step('open the url', async () => {
        await page.goto('https://the-internet.herokuapp.com/');
    })

    await test.step('Click on A/B testing link', async () => {
        await page.getByRole('link', { name: 'A/B Testing' }).screenshot({ path: './Screenshot/elementScreenshot.png' });
        await page.screenshot({ path: './Screenshot/Screenshot.png' });
        await page.screenshot({ path: './Screenshot/fullScreenshot.png', fullPage: true });
        await page.getByRole('link', { name: 'A/B Testing' }).click();
    });
    await test.step('validate the page title', async () => {
        await expect(page).toHaveTitle('The Internet');
        await page.close();
    })






});