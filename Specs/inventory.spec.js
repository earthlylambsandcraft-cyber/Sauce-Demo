const { test, expect } = require("../Fixtures/pageFixtures");
const { productNames, products } = require("../Data/items");
const { users } =require("../Data/users");
const { sortingOptions } = require("../Data/sorting");


test.use ({
    launchOptions:  {
        slowMo : 800,
    }
});

test.setTimeout(14000);

for (const product of products) {

    test(`Add ${product}`, async({
        login, 
        inventory
    }) => {

    await login.login(
        users.standardUser.username,
        users.standardUser.password
    );

    await inventory.addProduct(product);

    console.log(
        await inventory.getBadgeCount()
    );

});

}


test('Inventory page should load', async ({login, inventory}) => {
    
    await login.login(
        users.standardUser.username,
        users.standardUser.password
    );

    await inventory.verifyInventoryPage();
})

test('Product count', async ({login, inventory}) => {

    await login.login(
        users.standardUser.username,
        users.standardUser.password
    );

    const count =
    await inventory.getProductCount();

    console.log(count);

})

test('Product names', async ({login, inventory}) => {

    await login.login(
        users.standardUser.username,
        users.standardUser.password
    );

    console.log(
    await inventory.getProductNames()
    );

})

test('Product descriptions', async ({login, inventory}) => {
    
    await login.login(
        users.standardUser.username,
        users.standardUser.password
    );

    console.log(
    await inventory.getProductDescriptions()
    );

})

test('Product prices', async ({login, inventory}) => {

    await login.login(
        users.standardUser.username,
        users.standardUser.password
    );

    console.log(
    await inventory.getProductPrices()
    );

})

test('Product summary', async ({login, inventory}) => {
    
    await login.login(
        users.standardUser.username,
        users.standardUser.password
    );

    console.log(
    await inventory.getProductSummary()
    );

})

test('Add one product', async ({login, inventory}) => {
    
    await login.login(
        users.standardUser.username,
        users.standardUser.password
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
        users.standardUser.username,
        users.standardUser.password
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
        users.standardUser.username,
        users.standardUser.password
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
        users.standardUser.username,
        users.standardUser.password
    );

    await inventory.openCart();

    await cart.verifyCartPage();

})

test('Badge Count', async ({login, inventory}) => {

    await login.login(
        users.standardUser.username,
        users.standardUser.password
    );

    await inventory.addProduct(productNames.backpack);

    console.log(
        await inventory.getBadgeCount()
    );
})


for(options of sortingOptions) {


    test(`Sort ${option}`, async ({login, inventory}) => {
    
    await login.login(
        users.standardUser.username,
        users.standardUser.password
    );

    await inventory.sortBy(option);

    console.log(
        await inventory.getProductSummary()
    );

});

}

