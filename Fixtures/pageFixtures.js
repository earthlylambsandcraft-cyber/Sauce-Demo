const base = require('@playwright/test');
const { sauceAccount } = require('../Pages/LoginPage');
const { InventoryPage } = require('../Pages/InventoryPage');
const { CartPage } = require('../Pages/CartPage');
const { CheckoutPage } = require('../Pages/CheckoutPage');
const { OverviewPage } = require('../Pages/OverviewPage');
const { registerHooks } = require('../Hooks/testHook');





const test = base.test.extend({


    login: async({page}, use) => {

        const login =
        new sauceAccount(page);

        await use(login);
    },

    inventory: async({page}, use) => {

        const inventory =
        new InventoryPage(page);

        await use(inventory);
    },

    cart: async({page}, use) => {

        const cart =
        new CartPage(page);

        await use(cart);
    },

    checkout: async({page}, use) => {

        const checkout =
        new CheckoutPage(page);

        await use(checkout)

    },

    overview: async({page}, use) => {

        const overview =
        new OverviewPage(page);

        await use(overview);
    }

        

});

registerHooks(test);

module.exports = {

    test,

    expect: base.expect
}

