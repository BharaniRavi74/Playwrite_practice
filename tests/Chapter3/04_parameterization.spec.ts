import { test, expect } from "@playwright/test"

const Usernames=['standard_user','visual_user','problem_user'];
for(const user of Usernames){
      
//test case declaration
test(`Login and select the filter dropDown ${user}`, async ({ page }) => {
  
        await page.goto('https://www.saucedemo.com/');
        await page.getByPlaceholder('Username').fill(user);
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
               await page.close();


});
}
