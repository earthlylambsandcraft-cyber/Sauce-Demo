const { test, expect } = require("../Fixtures/pageFixtures");
const { productNames, products } = require("../Data/items");
const { users } =require("../Data/users");



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

    await expect(
        inventory.inventoryItems
    ).toHaveCount(6);


})

test('Product names', async ({login, inventory}) => {

    await login.login(
        users.standardUser.username,
        users.standardUser.password
    );

    const productNames = 
    await inventory.getProductNames();


    expect(productNames).toEqual(
        products.map(product => product.name)
    );
        
    
});

test('Product descriptions', async ({login, inventory}) => {
    
    await login.login(
        users.standardUser.username,
        users.standardUser.password
    );

    const descriptions = await inventory.getProductDescriptions();

    expect(descriptions).toEqual(
        products.map(product => product.description)
    );

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

    await expect(
        inventory.cartBadge
    ).toBeVisible();

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

    const cart = await inventory.getBadgeCount();

    expect(cart).toEqual([]);

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

    const cart =
        await inventory.getBadgeCount();

    expect(cart).toEqual(["1"]);
})




    test("Sort A-Z", async ({login, inventory}) => {
    
        await login.login(
            users.standardUser.username,
            users.standardUser.password
        );

        await inventory.sortBy("Name (A to Z)");

        
        const summary = await inventory.getProductSummary()
        

        const names = summary.map(product => product.name);


        const expected = [...names]
            .sort()

        expect(names).toEqual(expected);

    });



    test("Sort Z-A", async ({login, inventory}) => {
    
        await login.login(
            users.standardUser.username,
            users.standardUser.password
        );

        await inventory.sortBy("Name (Z to A)");;

        
        const summary = await inventory.getProductSummary()
        

        const names = summary.map(product => product.name);

        const expected = [...names]
            .sort()
            .reverse();

        expect(names).toEqual(expected);

    });

    test(`Price (low to high)`, async ({login, inventory}) => {
    
        await login.login(
            users.standardUser.username,
            users.standardUser.password
        );

        await inventory.sortBy("Price (low to high)");

        
        const summary = await inventory.getProductSummary()
        

        const prices = summary.map(product=>
            parseFloat(product.price.replace("$",""))
        );

        const expected = [...prices].sort((a,b) => a - b);

        expect(prices).toEqual(expected);

    });



    test(`Price (high to low)`, async ({login, inventory}) => {
    
        await login.login(
            users.standardUser.username,
            users.standardUser.password
        );

        await inventory.sortBy("Price (high to low)");

        
        const summary = await inventory.getProductSummary()
        

        const prices = summary.map(product =>
             parseFloat(product.price.replace("$",""))
            );


        const expected = [...prices].sort((a,b) => b - a)

        expect(prices).toEqual(expected);

    });


