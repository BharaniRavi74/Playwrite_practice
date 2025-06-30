import { test, expect } from '@playwright/test';

test('Code recorded test case', async ({ page }) => {
  await page.locator('body').click();
  await page.goto('https://the-internet.herokuapp.com/');
  await page.getByRole('link', { name: 'Add/Remove Elements' }).click();
  await page.getByRole('button', { name: 'Add Element' }).click();
  await page.getByRole('button', { name: 'Delete' }).click();
  await page.locator('#content div').filter({ hasText: 'Add Element' }).click();
  await page.getByRole('button', { name: 'Add Element' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Elemental Selenium' }).click();
  const page1 = await page1Promise;
  await page1.getByRole('button', { name: 'Take me to the tips! →' }).click();
});