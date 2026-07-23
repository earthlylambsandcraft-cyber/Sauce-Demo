const { Screenshot } = require('../Utils/screenshot')

function registerHooks(test) {

    test.beforeEach(async({page}) => {

        await page.goto('/');

        const username = page.getByPlaceholder('Username');

        console.log(
            "Username count:",
            await username.count()
        );

        console.log(
            "Visible:",
            await username.isVisible().catch(() => false)
        );

        console.log(
            "Enabled:",
            await username.isEnabled().catch(() => false)
        );

        await page.waitForLoadState('networkidle');

        console.log("URL:", await page.url());

        console.log("TITLE:", await page.title());

        const html = await page.content();

        console.log(html.slice(0, 500));

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