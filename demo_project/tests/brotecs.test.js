const { test, expect } = require('@playwright/test');

test('Brotecs  gg',async ({ page }) => {
  await page.goto('https://brotecs.com');
});