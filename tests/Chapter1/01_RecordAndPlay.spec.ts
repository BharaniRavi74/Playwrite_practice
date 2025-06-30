import { test, expect } from '@playwright/test';

test('Login and check for error message', async ({ page }) => {
  await test.step('Go to login page', async () => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');
   });

  await test.step('Enter Username and password', async () => {
   
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('student');
  await page.getByRole('textbox', { name: 'Username' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('Password135');
  await page.getByRole('textbox', { name: 'Password' }).press('ArrowDown');
  await page.getByRole('textbox', { name: 'Password' }).press('ArrowDown');
  });

  await test.step('Validate error message', async () => {
  
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.locator('#error')).toContainText('Your password is invalid!');
  });
});