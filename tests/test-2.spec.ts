import { test, expect } from '@playwright/test';

test('Login with user name and password ', async ({ page }) => {

  await test.step('Login with user name and password ', async () => {

    await page.goto('https://practicetestautomation.com/practice-test-login/');
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill('student');
    await page.getByRole('textbox', { name: 'Username' }).press('Tab');
    await page.getByRole('textbox', { name: 'Password' }).press('ArrowDown');
    await page.getByRole('textbox', { name: 'Password' }).press('ArrowDown');
    await page.getByRole('textbox', { name: 'Password' }).press('ArrowDown');
    await page.getByRole('textbox', { name: 'Password' }).press('ArrowDown');
    await page.getByRole('textbox', { name: 'Password' }).press('ArrowDown');
    await page.getByRole('textbox', { name: 'Password' }).press('ArrowDown');
    await page.getByRole('textbox', { name: 'Password' }).press('ArrowDown');
    await page.getByRole('textbox', { name: 'Password' }).press('ArrowDown');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('password124');
    await page.getByRole('button', { name: 'Submit' }).click();

  });                                                                                                                                                         

  test.step('Validate', async () => {
    await page.locator('#error').dblclick();
    await expect(page.locator('#error')).toContainText('Your password is invalid!');
  });

});

