import { test, expect } from '@playwright/test';

test('Should add customer', async ({ page }) => {
  await page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
  await expect(page.getByRole('button', { name: 'Bank Manager Login' })).toBeVisible();
  await page.getByRole('button', { name: 'Bank Manager Login' }).click();
  await expect(page.getByRole('button', { name: 'Add Customer' })).toBeVisible();
  await page.getByRole('button', { name: 'Add Customer' }).click();
  await page.getByPlaceholder('First Name').click();
  await page.getByPlaceholder('First Name').fill('Kalle');
  await page.getByPlaceholder('First Name').press('Tab');
  await page.getByPlaceholder('Last Name').fill('Anka');
  await page.getByPlaceholder('Last Name').press('Tab');
  await page.getByPlaceholder('Post Code').fill('12345');
  await page.getByRole('form').getByRole('button', { name: 'Add Customer' }).click();
});

test('Should open account', async ({ page }) => {
  
});