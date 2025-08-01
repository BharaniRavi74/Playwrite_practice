import { test, expect } from "@playwright/test"
import testdata from "../../TestData/testData.json"

type TestData = {
    testData1: {
        Username: string,
        Password: string
    },
    testData2: {
        Username: string,
        Password: string
    },
    testData3: {
        Username: string,
        Password: string
    },
}

const typedTestdata = testdata as TestData;

for (const dataSetname in typedTestdata) {

    const users = typedTestdata[dataSetname as keyof TestData]


    //test case declaration
    test(`Login and select the filter dropDown ${users.Username},${users.Password}`, async ({ page }) => {

        await page.goto('https://www.saucedemo.com/');
        await page.getByPlaceholder('Username').fill(users.Username);
        await page.getByPlaceholder('Password').fill(users.Password);

        //Get by role
        await page.getByRole("button", { name: 'Login' }).click();
        await page.waitForTimeout(5000);
        await page.close();


    });
}
