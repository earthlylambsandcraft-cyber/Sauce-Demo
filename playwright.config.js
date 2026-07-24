const { defineConfig } = require('@playwright/test');
require('dotenv').config();

module.exports = defineConfig({

    timeout: 40000,

    // playwright.config.js
    workers: 1,

    retries: 2,

    reporter:'html',

    use: {

        launchOptions: {
            slowMo: process.env.CI ? 0 : 1000
        },

        baseURL: process.env.BASE_URL || 'https://www.saucedemo.com',

        headless: process.env.CI ? true : process.env.HEADLESS === 'true',

        screenshot: 'only-on-failure',

        video: 'retain-on-failure',

        trace: 'retain-on-failure'

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