//import Playwright

import { test, expect } from "@playwright/test"

//test case declaration
test('Login and logout successfully', async ({ page }) => {
    await test.step('open the url', async () => {
        await page.goto('https://www.saucedemo.com/');
    })

    await test.step('Login by using placeholder text', async () => {
      // const UserName:string = (await page.locator('//*[@id="login_credentials"]/text()[contains(., "standard_user")]').textContent())?? '';
       await page.getByPlaceholder('Username').fill('standard_user');
        await page.getByPlaceholder('Password').fill('secret_sauce');
        await page.getByRole("button",{name :'Login'}).click();
        await page.locator('//button[@id="react-burger-menu-btn"]').click();
        await page.getByText('Logout').click();
        
    })

});