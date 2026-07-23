const { Screenshot } = require('../Utils/screenshot')

function registerHooks(test) {

    test.beforeEach(async({page}) => {

        await page.goto('/');

        await page.waitForLoadState('networkidle');


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