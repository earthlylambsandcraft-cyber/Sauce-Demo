const { test, expect } = require('../Fixtures/pageFixtures');
const { productNames } = require('../Data/items')

test.use ({
    launchOptions: {
        slowMo : 1200,
    }
});

test.setTimeout(30000);


test('Should verify checkout page', async({
    login,
    inventory,
    cart,
    checkout
}) => {

    await login.login(
        'standard_user',
        'secret_sauce'
    );

    await inventory.addProduct(productNames.backpack);

    await inventory.openCart();

    await cart.checkout();

    await checkout.verifyCheckOutPage();

});


test('Should sort badge count', async({
    login,
    inventory,
    cart,
    checkout
}) => {

    await login.login(
        'standard_user',
        'secret_sauce'
    );

    await inventory.addProduct(productNames.backpack);

    await inventory.openCart();

    await cart.checkout();

    const badge = 
    await checkout.getBadgeCount();

    console.log(badge);

});


test('Should fill first name', async({
    login,
    inventory,
    cart,
    checkout
}) => {

    await login.login(
        'standard_user',
        'secret_sauce'
    );

    await inventory.addProduct(productNames.backpack);

    await inventory.openCart();

    await cart.checkout();

    await checkout.fillFirstName();

});

test('Should fill last name', async({
    login,
    inventory,
    cart,
    checkout
}) => {

    await login.login(
        'standard_user',
        'secret_sauce'
    );

    await inventory.addProduct(productNames.backpack);

    await inventory.openCart();

    await cart.checkout();

    await checkout.fillLastName();

});

test('Should fill zip code', async({
    login,
    inventory,
    cart,
    checkout
}) => {

    await login.login(
        'standard_user',
        'secret_sauce'
    );

    await inventory.addProduct(productNames.backpack);

    await inventory.openCart();

    await cart.checkout();

    await checkout.fillZipCode();

});

test('Should fill customer information', async({
    login,
    inventory,
    cart,
    checkout
}) => {

    await login.login(
        'standard_user',
        'secret_sauce'
    );

    await inventory.addProduct(productNames.backpack);

    await inventory.openCart();

    await cart.checkout();

    await checkout.fillCustomerInformation();

});

test('Should check out order', async({
    login,
    inventory,
    cart,
    checkout
}) => {

    await login.login(
        'standard_user',
        'secret_sauce'
    );

    await inventory.addProduct(productNames.backpack);

    await inventory.openCart();
    
    await cart.checkout();

    await checkout.verifyCheckOutPage();


});




test('Should continue check out order', async({
    login,
    inventory,
    cart,
    checkout
}) => {

    await login.login(
        'standard_user',
        'secret_sauce'
    );

    await inventory.addProduct(productNames.backpack);

    await inventory.openCart();

    await cart.checkout();

    await checkout.fillCustomerInformation();

    await checkout.continueCheckout();

});

test('Can cancel check out order', async({
    login,
    inventory,
    cart,
    checkout
}) => {

    await login.login(
        'standard_user',
        'secret_sauce'
    );

    await inventory.addProduct(productNames.backpack);

    await inventory.openCart();

    await cart.checkout();

    await checkout.cancelCheckout();

});