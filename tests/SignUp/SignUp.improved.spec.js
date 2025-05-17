import { test, expect } from '@playwright/test';

/**
 * Test for automating the user registration process on automationexercise.com
 * This test covers the complete flow from signup to account creation
 */
test('Complete user registration on automationexercise.com', async ({ page }) => {
  // Step 1: Navigate to the homepage
  await page.goto('https://www.automationexercise.com/');
  console.log('✅ Navigated to website homepage');
  
  // Step 2: Click on the Signup/Login link
  await page.getByRole('link', { name: ' Signup / Login' }).click();
  await expect(page).toHaveURL(/.*login/);
  console.log('✅ Clicked on Signup/Login');
  
  // Step 3: Enter name and email for signup
  await page.getByRole('textbox', { name: 'Name' }).click();
  await page.getByRole('textbox', { name: 'Name' }).fill('New TestUser');
  
  // Use a dynamic email to avoid "email already exists" errors
  const randomEmail = `test${Date.now()}@example.com`;
  await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').click();
  await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill(randomEmail);
  console.log(`✅ Entered signup details with email: ${randomEmail}`);
  
  // Step 4: Click Signup button
  await page.getByRole('button', { name: 'Signup' }).click();
  await expect(page).toHaveURL(/.*signup/);
  console.log('✅ Clicked Signup button');
  
  // Step 5: Fill account information
  await page.getByRole('radio', { name: 'Mr.' }).check();
  
  // Name is auto-filled from previous step, but we need to enter password
  await page.getByRole('textbox', { name: 'Password *' }).click();
  await page.getByRole('textbox', { name: 'Password *' }).fill('Secure123!');
  
  // Step 6: Set date of birth
  await page.locator('#days').selectOption('24');
  await page.locator('#months').selectOption('1');
  await page.locator('#years').selectOption('1997');
  console.log('✅ Filled account info and DOB');
  
  // Step 7: Fill address information
  await page.getByRole('textbox', { name: 'First name *' }).click();
  await page.getByRole('textbox', { name: 'First name *' }).fill('Pratik');
  
  await page.getByRole('textbox', { name: 'Last name *' }).click();
  await page.getByRole('textbox', { name: 'Last name *' }).fill('Shill');
  
  await page.getByRole('textbox', { name: 'Company', exact: true }).click();
  await page.getByRole('textbox', { name: 'Company', exact: true }).fill('Test Company');
  
  await page.getByRole('textbox', { name: 'Address * (Street address, P.' }).click();
  await page.getByRole('textbox', { name: 'Address * (Street address, P.' }).fill('B Block, ABC Road');
  
  await page.getByLabel('Country *').selectOption('United States');
  
  await page.getByRole('textbox', { name: 'State *' }).click();
  await page.getByRole('textbox', { name: 'State *' }).fill('Test State');
  
  await page.getByRole('textbox', { name: 'City * Zipcode *' }).click();
  await page.getByRole('textbox', { name: 'City * Zipcode *' }).fill('Test City');
  
  await page.locator('#zipcode').click();
  await page.locator('#zipcode').fill('12345');
  console.log('✅ Filled address information');
  
  // Step 8: Enter mobile number
  await page.getByRole('textbox', { name: 'Mobile Number *' }).click();
  await page.getByRole('textbox', { name: 'Mobile Number *' }).fill('1234567890');
  console.log('✅ Entered mobile number');
  
  // Step 9: Create account
  await page.getByRole('button', { name: 'Create Account' }).click();
  
  // Step 10: Verify account creation success
  await expect(page).toHaveURL(/.*account_created/);
  await expect(page.getByText('Account Created!')).toBeVisible();
  console.log('✅ Account created successfully');
  
  // Step 11: Click continue
  await page.getByRole('link', { name: 'Continue' }).click();
  
  // Handle potential ad popup (if it appears)
  try {
    // If there's an iframe ad, we might need to switch to main frame
    await page.frameLocator('iframe').nth(0).locator('body').click();
  } catch (error) {
    console.log('No ad popup or already on main frame');
  }
  
  console.log('✅ Test completed successfully');
});
