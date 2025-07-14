//import Playwright

import { test, expect } from "@playwright/test"

test.beforeEach(async({page})=> {
    await test.step('open the url', async () => {
        await page.goto('https://www.saucedemo.com/');
    })


    console.log("Before each test case");
})

test.afterEach(async({page})=> {
await test.step('Close the brower', async () => {
        await page.close();
    })


    console.log("After each test case");
})


//test case declaration
test('Login and select the filter dropDown', async ({ page }) => {

    await test.step('Login and filter the date', async () => {
       // const UserName: string = (await page.locator('//*[@id="login_credentials"]/text()[contains(., "standard_user")]').textContent()) ?? '';
        //await console.log(UserName);
        //Get by Placeholder
        await page.getByPlaceholder('Username').fill('standard_user');
        await page.getByPlaceholder('Password').fill('secret_sauce');

        //Get by role
        await page.getByRole("button", { name: 'Login' }).click();

        //Drop down selection - By Value 
       await page.locator('//select[@class="product_sort_container"]').selectOption('hilo');
       //Drop down selection - By Visible text
    //   await page.locator('//select[@class="product_sort_container"]').selectOption('Price (low to high)');
       
       //Validate all the dropdown options
       await expect(page.locator('.product_sort_container>option')).toHaveText(['Name (A to Z)','Name (Z to A)','Price (low to high)','Price (high to low)']);
       await page.waitForTimeout(5000); 
    })

});

