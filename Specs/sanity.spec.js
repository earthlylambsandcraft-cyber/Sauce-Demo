const {test, expect} = require('../Fixtures/pageFixtures');
const { productNames } = require('../Data/items');
const{ users } = require('../Data/users'); 






test('Sanity || Complete purchase flow', async({
     login, 
     inventory,
     cart,
     checkout,
     overview
    }) => {    

    await login.verifyPage();

    await login.login(
        users.standardUser.username,
        users.standardUser.password
    );

    await inventory.verifyInventoryPage();

    await inventory.addProduct(
    productNames.backpack
    );

    await inventory.addProduct(
        productNames.bikeLight
    );

    await inventory.addProduct(
        productNames.boltShirt
    );

    console.log(
    await inventory.getBadgeCount()
    );

    await inventory.openCart();

    await cart.verifyCartPage();

    console.log(
    await cart.getCartSummary()
    );

    await cart.checkout();

    await checkout.verifyCheckOutPage();

    await checkout.fillCustomerInformation();

    await checkout.continueCheckout();

    await overview.verifyPage();

    console.log(
    await overview.getProducts()
    );

    console.log(
        await overview.getPaymentInformation()
    );

    console.log(
        await overview.getShippingInformation()
    );

    console.log(
        await overview.getSubtotal()
    );

    console.log(
        await overview.getTax()
    );

    console.log(
        await overview.getTotal()
    );

    await overview.finishOrder();

    console.log(
    await overview.verifyConfirmation()
);

})





