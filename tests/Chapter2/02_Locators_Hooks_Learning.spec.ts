//import Playwright

import { test, expect } from "@playwright/test"

test.beforeEach(async({page})=> {
    await test.step('open the url', async () => {
        await page.goto('https://www.saucedemo.com/');
    })


    console.log("ABCD before each test case");
})

test.afterEach(async({page})=> {
await test.step('Close the brower', async () => {
        await page.close();
    })


    console.log("ABCD after each test case");
})


//test case declaration
test('Login and logout successfully', async ({ page }) => {

    await test.step('Login by using placeholder text', async () => {
       // const UserName: string = (await page.locator('//*[@id="login_credentials"]/text()[contains(., "standard_user")]').textContent()) ?? '';
        //await console.log(UserName);
        //Get by Placeholder
        await page.getByPlaceholder('Username').fill('standard_user');
        await page.getByPlaceholder('Password').fill('secret_sauce');

        //Get by role
        await page.getByRole("button", { name: 'Login' }).click();


        //get by Alt - Image retrival
        await page.getByAltText('Sauce Labs Backpack').click();

        //Get by xpath 
        await page.locator('//button[@id="react-burger-menu-btn"]').click();

        //Get by visible text
        await page.getByText('Logout').click();

    })

});

test('Test case 2 ', async ({ page }) => {
  /*  await test.step('open the url', async () => {
        await page.goto('https://www.saucedemo.com/');
    })*/

    await test.step('Login by using placeholder text', async () => {
       // const UserName: string = (await page.locator('//*[@id="login_credentials"]/text()[contains(., "standard_user")]').textContent()) ?? '';
        //await console.log(UserName);
        //Get by Placeholder
        await page.getByPlaceholder('Username').fill('standard_user');
        await page.getByPlaceholder('Password').fill('secret_sauce');

        //Get by role
        await page.getByRole("button", { name: 'Login' }).click();


        //get by Alt - Image retrival
        await page.getByAltText('Sauce Labs Backpack').click();

        //Get by xpath 
        await page.locator('//button[@id="react-burger-menu-btn"]').click();

        //Get by visible text
        await page.getByText('Logout').click();

    })

});
