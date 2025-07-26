//import Playwright

import { test, expect } from "@playwright/test"

//test case declaration
test('Alert popup', async ({ page }) => {
     await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');
        page.once('dialog',dialog=>{
            dialog.accept();
            console.log(dialog.message());
            console.log(dialog.type());
        })
         await page.getByText('See an example alert',{exact :true}).click();   

});
test('Confirm popup', async ({ page }) => {
      await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');
        page.once('dialog',dialog=>{
            dialog.accept();
            console.log(dialog.message());
            console.log(dialog.type());
        })
         await page.getByText('See a sample confirm',{exact :true}).click();

    
});
test('prompt popup', async ({ page }) => {
      await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');
      page.once('dialog',async(dialog)=>{
           console.log(dialog.message());
           console.log(dialog.type());
           await dialog.accept('playwright');
         
        })
         await page.getByText('See a sample prompt',{exact :true}).click();
      

    
});
