//import Playwright

import { test, expect } from "@playwright/test"

test('for of loop', async ({ page }) => {
    await test.step('Navigate to URL', async () => {
        await page.goto('https://github.com/BharaniRavi74');
    })

    await test.step('repos link', async () => {
       const repolinks= await page.$$('[class="repo"]');

       for (const repolink of repolinks)
       {
        const text=await repolink.textContent();
        const finaltext=text?.trim();
        console.log(`Repo name : ${finaltext}`);
       }
    });

    
});
console.log(`=====================   nm============================`);
test('Iteration using for loop', async ({ page }) => {
    await test.step('Navigate to URL', async () => {
        await page.goto('https://github.com/BharaniRavi74');
    })

    await test.step('repos link', async () => {
       const repolinks= await page.$$('[class="repo"]');

       for (let index = 0; index < repolinks.length; index++)  
       {
        const text=await repolinks[index].textContent();
const finaltext=text?.trim();
        console.log(`Repo name : ${finaltext}`);
       }
    });

    
});

console.log(`=================================================`);
test('Iteration using for loop for nth element', async ({ page }) => {
    await test.step('Navigate to URL', async () => {
        await page.goto('https://github.com/BharaniRavi74');
    })

    await test.step('repos link', async () => {
       const repolinks= await page.locator('[class="repo"]');
       const countn=await repolinks.count();
       for (let index = 0; index<countn; index++)  
       {
        const text=await repolinks.nth(index).textContent();
        const finaltext=text?.trim();
        console.log(`Repo name : ${finaltext}`);
       }
    });

    
});


console.log(`=================================================`);
