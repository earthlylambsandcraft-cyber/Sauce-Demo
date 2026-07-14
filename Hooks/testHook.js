const { Screenshot } = require('../Utils/screenshot')

function registerHooks(test) {

    test.beforeEach(async({page}) => {

        await page.goto('https://saucedemo.com');

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