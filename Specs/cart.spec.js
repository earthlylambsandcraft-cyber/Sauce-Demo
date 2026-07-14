const { test, expect } = require('../Fixtures/pageFixtures');
const { productNames } = require("../Data/items");

test.use({
    launchOptions: {
        slowMo : 1000,
    }
});

test.setTimeout(14000);


test('Cart should open upon clicking', async({login, cart}) => {

    

    await login.login(
        'standard_user', 
        'secret_sauce'
    );

    await cart.open();


    await cart.verifyCartPage();

});


test('Cart should display products', async({login, inventory, cart}) => {    

    await login.login(
        'standard_user',
        'secret_sauce'
    );


    await inventory.addProduct(productNames.backpack);
    await inventory.addProduct(productNames.bikeLight);
    await inventory.addProduct(productNames.boltShirt);

    await inventory.openCart();

    console.log(
        await cart.getItems()
    );

});

test('Cart should display prices', async({login, inventory, cart}) => {    

    await login.login(
        'standard_user',
        'secret_sauce'
    );

    await inventory.addProduct(productNames.backpack);
    await inventory.addProduct(productNames.bikeLight);
    await inventory.addProduct(productNames.boltShirt);

    await inventory.openCart();

    console.log(
        await cart.getPrices()
    );

});

test('Cart should display quantities', async({login, inventory, cart}) => {    


    await login.login(
        'standard_user',
        'secret_sauce'
    );

    await inventory.addProduct(productNames.backpack);
    await inventory.addProduct(productNames.bikeLight);
    await inventory.addProduct(productNames.boltShirt);

    await inventory.openCart();

    console.log(
        await cart.getQuantities()
    );

});

test('Continue shopping', async({login, inventory, cart}) => {    

    await login.login(
        'standard_user',
        'secret_sauce'
    );

    await inventory.addProduct(productNames.backpack);

    await inventory.openCart();

    await cart.continueShopping();

    await inventory.verifyInventoryPage();


});

test('Checkout Navigation', async({login, inventory, cart, checkout}) => {    

    await login.login(
        'standard_user',
        'secret_sauce'
    );

    await inventory.addProduct(productNames.backpack);

    await inventory.openCart();

    await cart.checkout();

    await checkout.verifyCheckOutPage();

});

test('Remove one item', async({login, inventory, cart}) => {    

    await login.login('standard_user', 'secret_sauce');

    await inventory.addProduct(
        productNames.backpack
    );

    await inventory.removeProduct(
        productNames.backpack
    );

    console.log(
        await inventory.getBadgeCount()
    );

    

});

test('Remove all items', async({login, inventory, cart}) => {    

    await login.login('standard_user', 'secret_sauce');

    await inventory.addProduct(
        productNames.backpack
    );

    await inventory.addProduct(
        productNames.bikeLight
    );

    await inventory.addProduct(
        productNames.fleeceJacket
    );

    await inventory.removeProduct(
        productNames.backpack
    );

    await inventory.removeProduct(
        productNames.bikeLight
    );

    await inventory.removeProduct(
        productNames.fleeceJacket
    );

    console.log(
        await inventory.getBadgeCount()
    );

});

test('Empty cart', async({login, inventory, cart}) => {    

    
    await login.login('standard_user', 'secret_sauce');

    await cart.open();

    expect(
        await cart.isEmpty()
    ).toBe(true);

});

test('Badge Updates', async({login, inventory, cart}) => {    

    await login.login(
        'standard_user',
        'secret_sauce'
    );

    await inventory.addProduct(productNames.backpack);
    await inventory.addProduct(productNames.bikeLight);

    console.log(
        await inventory.getBadgeCount()
    );


});