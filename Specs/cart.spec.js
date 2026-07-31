const { test, expect } = require('../Fixtures/pageFixtures');
const { productNames, products } = require("../Data/items");
const { users } = require("../Data/users")




test('Cart should open upon clicking', async({login, cart}) => {

    

    await login.login(
        'standard_user', 
        'secret_sauce'
    );

    await cart.open();


    await cart.verifyCartPage(
        'Your Cart',
        'Description',
        'QTY',
    );

});


test('Cart should display products', async({login, inventory, cart}) => {    

    await login.login(
        users.standardUser.username,
        users.standardUser.password
    );


    await inventory.addProduct(productNames.backpack);
    await inventory.addProduct(productNames.bikeLight);
    await inventory.addProduct(productNames.boltShirt);

    await inventory.openCart();

    const actual = await cart.getItemNames();
    const expected = products
        .slice(0, 3)
        .map(product => product.name);

    expect(actual).toEqual(expected);

});

test('Cart should display prices', async({login, inventory, cart}) => {    

    await login.login(
        users.standardUser.username,
        users.standardUser.password
    );

    await inventory.addProduct(productNames.backpack);
    await inventory.addProduct(productNames.bikeLight);
    await inventory.addProduct(productNames.boltShirt);

    await inventory.openCart();

    const actualPrices =  await cart.getItemPrices();
    const expectedPrices = products.map(product => product.price); 
    
    expect(actualPrices).toEqual(expectedPrices)

});

test('Cart should display quantities', async({login, inventory, cart}) => {    


    await login.login(
        users.standardUser.username,
        users.standardUser.password
    );

    await inventory.addProduct(productNames.backpack);
    await inventory.addProduct(productNames.bikeLight);
    await inventory.addProduct(productNames.boltShirt);

    await inventory.openCart();

    
    const itemQuantity = 
        await cart.getItemQuantities()

    expect(itemQuantity).toEqual(["1", "1", "1"]);
    

});

test('Continue shopping', async({login, inventory, cart}) => {    

    await login.login(
        users.standardUser.username,
        users.standardUser.password
    );

    await inventory.addProduct(productNames.backpack);

    await inventory.openCart();

    await cart.continueShopping();

    await inventory.verifyInventoryPage();


});

test('Checkout Navigation', async({login, inventory, cart, checkout}) => {    

    await login.login(
        users.standardUser.username,
        users.standardUser.password
    );

    await inventory.addProduct(productNames.backpack);

    await inventory.openCart();

    await cart.checkout();

    await checkout.verifyCheckOutPage();

});

test('Remove one item', async({login, inventory, cart}) => {    

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

    const badgeCount = await inventory.getBadgeCount();

    expect(badgeCount).toEqual([])

    

});

test('Remove all items', async({login, inventory, cart}) => {    

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

    
    const badgeCount = await inventory.getBadgeCount();

    expect(badgeCount).toEqual([])
    

});

test('Empty cart', async({login, inventory, cart}) => {    

    
    await login.login(
        users.standardUser.username,
        users.standardUser.password
    );

    await cart.open();

    expect(
        await cart.isEmpty()
    ).toBe(true);

});

test('Badge Updates', async({login, inventory, cart}) => {    

    await login.login(
        users.standardUser.username,
        users.standardUser.password
    );

    await inventory.addProduct(productNames.backpack);
    await inventory.addProduct(productNames.bikeLight);

    const badgeCount = await inventory.getBadgeCount();

    expect(badgeCount).toEqual(["2"])


});