import { test, expect, Page } from '@playwright/test';

test('Open a new tab and go to a different URL', async ({ browser }) => {
  let context;
  let firstTab: Page;
  let secondTab: Page;

  // Step 1: Create browser context
  await test.step('Create new browser context', async () => {
    context = await browser.newContext();
  });

  // Step 2: Open first tab and navigate
  await test.step('Open the first tab and navigate to example.com', async () => {
    firstTab = await context.newPage();
    await firstTab.goto('https://example.com');
    expect(firstTab.url()).toBe('https://example.com/');
  });

  // Step 3: Open second tab and navigate
  await test.step('Open the second tab and navigate to playwright.dev', async () => {
    secondTab = await context.newPage();
    await secondTab.goto('https://playwright.dev');
    expect(secondTab.url()).toContain('playwright.dev');
  });

  // Step 4: Validate both tabs are open and URLs are correct
  await test.step('Validate both tabs are loaded with correct URLs', async () => {
    expect(firstTab.url()).toBe('https://example.com/');
    expect(secondTab.url()).toContain('playwright.dev');
  });
});
