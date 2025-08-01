import { test, expect } from "@playwright/test"
import {parse} from 'csv-parse/sync';
import fs from 'fs';
import path from 'path';

type users={

    username : string,
    password : string
}


const Userslist = parse(
    fs.readFileSync(path.join(__dirname,'../../TestData/testdata.csv')),{
        columns :true,
        skipEmptyLines:true
    }
)as users[];

for (const users of Userslist) {

    //test case declaration
    test(`Login and select the filter dropDown ${users.username},${users.password}`, async ({ page }) => {

        await page.goto('https://www.saucedemo.com/');
        await page.getByPlaceholder('Username').fill(users.username);
        await page.getByPlaceholder('Password').fill(users.password);

        //Get by role
        await page.getByRole("button", { name: 'Login' }).click();
        await page.waitForTimeout(5000);
        await page.close();


    });
}
