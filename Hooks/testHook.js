const { Screenshot } = require('../Utils/screenshot')

function registerHooks(test) {

    test.beforeEach(async ({ page }) => {
    
        await page.goto('/');

        await page.waitForLoadState('domcontentloaded');

        await expect(
        page.getByPlaceholder('Username')
        ).toBeVisible({ timeout: 30000 });
            });

    test.afterEach(async({page}, testInfo)=> {

        if(testInfo.status !== testInfo.expectedStatus) {

            const screenshot =
            new Screenshot(page);

            await screenshot.capture(
                testInfo.title
            );
            
        }
    
    
    });

}

    

module.exports = {

    registerHooks

}