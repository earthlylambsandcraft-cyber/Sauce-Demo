const { test, expect } = require("../Fixtures/pageFixtures");
const { productNames, products } = require("../Data/items");
const { users } =require("../Data/users");
const { sortingOptions } = require("../Data/sorting");


for (const product of products) {

    test(`Add ${product.name}`, async({
        login, 
        inventory
    }) => {

    await login.login(
        users.standardUser.username,
        users.standardUser.password
    );

    await inventory.addProduct(
        product.name
    );

    
    const cart = await inventory.getBadgeCount();

    expect(cart).toEqual(["1"]);
    

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


    expect(count).toBe(6);

})

test('Product names', async ({login, inventory}) => {

    await login.login(
        users.standardUser.username,
        users.standardUser.password
    );

    const productNames = 
    await inventory.getProductNames();



    expect(productNames).toEqual([
        "Sauce Labs Backpack",
        "Sauce Labs Bike Light",
        "Sauce Labs Bolt T-Shirt",
        "Sauce Labs Fleece Jacket",
        "Sauce Labs Onesie",
        "Test.allTheThings() T-Shirt (Red)"
    
    ]);
    
    
});

test('Product descriptions', async ({login, inventory}) => {
    
    await login.login(
        users.standardUser.username,
        users.standardUser.password
    );

    const descriptions = await inventory.getProductDescriptions();

    expect(descriptions).toEqual([
        'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.',
        "A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.",
        'Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.',
        "It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.",
        "Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.",
        'This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.'
        ]);

})

for(const product of products) {

    test(`Validate price ${product.name}`, async({
        login, 
        inventory
    }) => {

        await login.login(
            users.standardUser.username,
            users.standardUser.password
        );

        
        const price =
        await inventory.getProductPrice(product.name);
        

        expect(price)
        .toBe(product.price)
        
    });

}

test('Product summary', async ({login, inventory}) => {
    
    await login.login(
        users.standardUser.username,
        users.standardUser.password
    );

    const summary = await inventory.getProductSummary();

    expect(summary).toEqual(products);

})

test('Add one product', async ({login, inventory}) => {
    
    await login.login(
        users.standardUser.username,
        users.standardUser.password
    );

    await inventory.addProduct(
    productNames.backpack
    );

    const cart = await inventory.getBadgeCount();

    expect(cart).toEqual(["1"]);

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

    const cart = await inventory.getBadgeCount();

    expect(cart).toEqual(["3"]);
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


for(const options of sortingOptions) {


    test(`Sort ${options}`, async ({login, inventory}) => {
    
    await login.login(
        users.standardUser.username,
        users.standardUser.password
    );

    await inventory.sortBy(options);

    console.log(
        await inventory.getProductSummary()
    );

});

}

