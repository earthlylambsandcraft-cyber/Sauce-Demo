const { test, expect } = require("../Fixtures/pageFixtures");
const { productNames } = require("../Data/items")

test.use ({
    launchOptions:  {
        slowMo : 800,
    }
});

test.setTimeout(14000);



test('Inventory page should load', async ({login, inventory}) => {
    
    await login.login(
        'standard_user',
        'secret_sauce'
    );

    await inventory.verifyInventoryPage();
})

test('Product count', async ({login, inventory}) => {

    await login.login(
        'standard_user',
        'secret_sauce'
    );

    const count =
    await inventory.getProductCount();

    console.log(count);

})

test('Product names', async ({login, inventory}) => {

    await login.login(
        'standard_user',
        'secret_sauce'
    );

    console.log(
    await inventory.getProductNames()
    );

})

test('Product descriptions', async ({login, inventory}) => {
    
    await login.login(
        'standard_user',
        'secret_sauce'
    );

    console.log(
    await inventory.getProductDescriptions()
    );

})

test('Product prices', async ({login, inventory}) => {

    await login.login(
        'standard_user',
        'secret_sauce'
    );

    console.log(
    await inventory.getProductPrices()
    );

})

test('Product summary', async ({login, inventory}) => {
    
    await login.login(
        'standard_user',
        'secret_sauce'
    );

    console.log(
    await inventory.getProductSummary()
    );

})

test('Add one product', async ({login, inventory}) => {
    
    await login.login(
        'standard_user',
        'secret_sauce'
    );

    await inventory.addProduct(
    productNames.backpack
    );

    console.log(
    await inventory.getBadgeCount()
    );

})

test('Add multiple products', async ({login, inventory}) => {

    await login.login(
        'standard_user',
        'secret_sauce'
    );

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
})

test('Remove one product', async ({login, inventory}) => {
   
    await login.login(
        'standard_user',
        'secret_sauce'
    );

    await inventory.addProduct(
        productNames.backpack
    );

    await inventory.removeProduct(
        productNames.backpack
    );

    console.log(
        await inventory.getBadgeCount()
    );

})

test('Open Cart', async ({login, cart, inventory}) => {
    
    await login.login(
        'standard_user',
        'secret_sauce'
    );

    await inventory.openCart();

    await cart.verifyCartPage();

})

test('Badge Count', async ({login, inventory}) => {

    await login.login(
        'standard_user',
        'secret_sauce'
    );

    await inventory.addProduct(productNames.backpack);

    console.log(
        await inventory.getBadgeCount()
    );
})



test('Sort A-Z', async ({login, inventory}) => {
    
    await login.login(
        'standard_user',
        'secret_sauce'
    );

    await inventory.sortBy(
    'Name (A to Z)'
    );

    console.log(
        await inventory.getProductNames()
    );

})

test('Sort Z-A', async ({login, inventory}) => {
    
    await login.login(
        'standard_user',
        'secret_sauce'
    );

    await inventory.sortBy(
    'Name (Z to A)'
    );

    console.log(
        await inventory.getProductNames()
    );

})

test('Sort Low-High', async ({login, inventory}) => {

    await login.login(
        'standard_user',
        'secret_sauce'
    );

    await inventory.sortBy(
    'Price (low to high)'
    );

    console.log(
        await inventory.getProductPrices()
    );

})


test('Sort High-Low', async ({login, inventory}) => {

    await login.login(
        'standard_user',
        'secret_sauce'
    );

    await inventory.sortBy(
    'Price (high to low)'
    );

    console.log(
        await inventory.getProductPrices()
    );
})