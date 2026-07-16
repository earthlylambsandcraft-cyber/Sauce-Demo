const { defineConfig } = require('@playwright/test');
require('dotenv').config();

module.exports = defineConfig({

    timeout: 40000,

    retries: 2,

    reporter:'html',

    use: {

        launchOptions: {
            slowMo: 1000
        },

        baseURL: process.env.BASE_URL,

        headless: process.env.HEADLESS === 'true',

        screenshot: 'only-on-failure',

        video: 'retain-on-failure',

        trace: 'on-first-retry'

    },

    projects: [

        {
            name: 'chromium',

            use: {
                browserName: 'chromium'
            }
        },

        {
            name: 'firefox',

            use: {
                browserName: 'firefox'
            }
        },

        {
            name: 'webkit',

            use: {
                browserName: 'webkit'
            }
        },
    ]

});