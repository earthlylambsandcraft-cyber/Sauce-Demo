const { test, expect } = require('@playwright/test');

test('Debug SauceDemo Login', async ({ page }) => {
    await page.goto('https://www.saucedemo.com');

    const username = page.getByPlaceholder('Username');

    console.log('URL:', page.url());
    console.log('Count:', await username.count());
    console.log('Visible:', await username.isVisible());
    console.log('Enabled:', await username.isEnabled());
    console.log('Editable:', await username.isEditable());

    await expect(username).toBeVisible();

    await username.fill('standard_user');

    await expect(username).toHaveValue('standard_user');
});