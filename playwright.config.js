const { defineConfig } = require('@playwright/test');
require('dotenv').config();

module.exports = defineConfig({

    timeout: 20000,

    use: {

        launchOptions: {
            slowMo: 1000
        },

        baseURL: process.env.BASE_URL,

        browserName: process.env.BROWSER,

        headless: process.env.HEADLESS === 'true',

    }

});