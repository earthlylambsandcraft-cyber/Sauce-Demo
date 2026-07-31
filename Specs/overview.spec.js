const { test, expect } = require('../Fixtures/pageFixtures');
const { productNames, products } = require('../Data/items');
const { users } = require('../Data/users')



test('Overview should load', async({
    login,
    inventory,
    cart,
    checkout,
    overview
}) => {
    

    await login.login(
        users.standardUser.username,
        users.standardUser.password
    );

    await inventory.addProduct(productNames.backpack);

    await inventory.openCart();

    await cart.checkout();

    await checkout.fillCustomerInformation();

    await checkout.continueCheckout();

    await overview.verifyOverviewPage();

})

test('Products Summary', async({
    login,
    inventory,
    cart,
    checkout,
    overview
}) => {

    await login.login(
        users.standardUser.username,
        users.standardUser.password
    );

    await inventory.addProduct(productNames.backpack);

    await inventory.openCart();

    await cart.checkout();

    await checkout.fillCustomerInformation();

    await checkout.continueCheckout();
    
    console.log(
        await overview.getProducts()
    );

})

test('Payment Information', async({
    login,
    inventory,
    cart,
    checkout,
    overview
}) => {

    await login.login(
        users.standardUser.username,
        users.standardUser.password
    );

    await inventory.addProduct(productNames.backpack);

    await inventory.openCart();

    await cart.checkout();

    await checkout.fillCustomerInformation();

    await checkout.continueCheckout();

    console.log(
        await overview.getPaymentInformation()
    );
    
})

test('Shipping Information', async({
    login,
    inventory,
    cart,
    checkout,
    overview
}) => {

    await login.login(
        users.standardUser.username,
        users.standardUser.password
    );

    await inventory.addProduct(productNames.backpack);

    await inventory.openCart();

    await cart.checkout();

    await checkout.fillCustomerInformation();

    await checkout.continueCheckout();

    console.log(
        await overview.getShippingInformation()
    );
    
})

test('Subtotal', async({
    login,
    inventory,
    cart,
    checkout,
    overview
}) => {

    await login.login(
        users.standardUser.username,
        users.standardUser.password
    );

    await inventory.addProduct(productNames.backpack);

    await inventory.openCart();

    await cart.checkout();

    await checkout.fillCustomerInformation();

    await checkout.continueCheckout();

    console.log(
        await overview.getSubtotal()
    );
    
})

test('Tax', async({
    login,
    inventory,
    cart,
    checkout,
    overview
}) => {

    await login.login(
        users.standardUser.username,
        users.standardUser.password
    );

    await inventory.addProduct(productNames.backpack);

    await inventory.openCart();

    await cart.checkout();

    await checkout.fillCustomerInformation();

    await checkout.continueCheckout();

    console.log(
        await overview.getTax()
    );
    
})

test('Total', async({
    login,
    inventory,
    cart,
    checkout,
    overview
}) => {

    await login.login(
        users.standardUser.username,
        users.standardUser.password
    );

    await inventory.addProduct(productNames.backpack);

    await inventory.openCart();

    await cart.checkout();

    await checkout.fillCustomerInformation();

    await checkout.continueCheckout();

    console.log(
        await overview.getTotal()
    );
    
})

test('Cancel Order', async({
    login,
    inventory,
    cart,
    checkout,
    overview
}) => {

    await login.login(
        users.standardUser.username,
        users.standardUser.password
    );

    await inventory.addProduct(productNames.backpack);

    await inventory.openCart();

    await cart.checkout();

    await checkout.fillCustomerInformation();

    await checkout.continueCheckout();

    await overview.cancelOrder();

    await inventory.verifyInventoryPage();    
    
})

test('Finish Order', async({
    login,
    inventory,
    cart,
    checkout,
    overview
}) => {

    await login.login(
        users.standardUser.username,
        users.standardUser.password
    );

    await inventory.addProduct(productNames.backpack);

    await inventory.openCart();

    await cart.checkout();

    await checkout.fillCustomerInformation();

    await checkout.continueCheckout();

    await overview.finishOrder();

    const confirmation =
        await overview.getConfirmation();

    expect(confirmation).toEqual({
        greetingMessage: "Thank you for your order!",
        greetingContent:
            "Your order has been dispatched, and will arrive just as fast as the pony can get there!"
    });
    
})

test('Badge Count', async({
    login,
    inventory,
    cart,
    checkout,
    overview
}) => {

    await login.login(
        users.standardUser.username,
        users.standardUser.password
    );

    await inventory.addProduct(productNames.backpack);

    await inventory.openCart();

    await cart.checkout();

    await checkout.fillCustomerInformation();

    await checkout.continueCheckout();

    const badgeCount = await overview.getBadgeCount();

    expect(badgeCount).toEqual(["1"])
    
})