import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://tk-academy-admin.vercel.app/auth/login');
  await page.getByRole('textbox', { name: 'Email Address' }).click();
  await page.getByRole('textbox', { name: 'Email Address' }).click();
  await page.getByRole('textbox', { name: 'Email Address' }).fill('admin@tekademy.io');
  await page.getByRole('textbox', { name: 'Password' }).dblclick();
  await page.getByRole('textbox', { name: 'Password' }).fill('Password123!');
  await page.getByRole('button', { name: 'Continue with this email' }).click();
  await page.getByRole('link', { name: 'Live classes' }).click();
  await page.getByRole('button', { name: 'Create Live Class' }).click();
  await page.getByRole('textbox', { name: 'Date' }).fill('2026-05-12');
  await page.getByRole('textbox', { name: 'Time' }).click();
  await page.getByRole('textbox', { name: 'Time' }).click();
  await page.getByRole('textbox', { name: 'Time' }).fill('09:08');
  await page.getByRole('spinbutton', { name: 'Duration (minutes)' }).click();
  await page.getByRole('spinbutton', { name: 'Duration (minutes)' }).fill('6');
  await page.getByRole('spinbutton', { name: 'Duration (minutes)' }).press('ArrowLeft');
  await page.getByRole('spinbutton', { name: 'Duration (minutes)' }).fill('86');
  await page.getByRole('spinbutton', { name: 'Duration (minutes)' }).fill('86');
});