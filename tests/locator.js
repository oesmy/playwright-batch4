// @ts-check
// https://git-scm.com/book/id/v2/Git-Basics-Working-with-Remotes
import { test, expect } from '@playwright/test';

test('test case login', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
});


