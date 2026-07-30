const { expect } = require("@playwright/test");


class CartPage {
    constructor(page){
        this.page = page

        this.cartRedirection = page
            .locator('.shopping_cart_link');

        this.cartTitle = page
            .getByText('Your Cart');

        this.cartDesc = page
            .getByText('Description');

        this.quantityHeader = page
            .getByText('QTY');

        this.itemQty = page
            .locator('.shopping_cart_badge');

        this.itemName = page
            .locator('.inventory_item_name');

        this.itemDescriptions = page
            .locator('.inventory_item_desc');

        this.itemPrices = page
            .locator('.inventory_item_price');

        this.cartItems = page
            .locator('.cart_item')

        this.cartCheckOut = page
            .getByRole('button', { name : 'Checkout' });

        this.continueShop = page
            .getByRole('button', { name : 'Continue Shopping' });
        
        this.itemQuantities = page
            .locator('.cart_quantity');
    }



async open() {
    
    await this.cartRedirection.click();

}

async verifyCartPage(
    expectedTitle, 
    
    quantityColumn, 
    
    descriptionColumn) {
    
        await expect(this.page).toHaveURL(/cart.html/);
    
        await expect(this.cartTitle).toBeVisible();

        await expect(this.quantityHeader).toBeVisible();

        await expect(this.cartDesc).toBeVisible();
    
        await expect(this.cartTitle)
            .toHaveText(expectedTitle);

        await expect(this.quantityHeader)
            .toHaveText(quantityColumn);

        await expect(this.cartDesc)
            .toHaveText(descriptionColumn);

    
    }

async getBadgeNumber() {
    
        const badgeText = await this.itemQty.textContent();

        return Number(badgeText);
    }



async getItemNames() {

            const descriptionSort = await this.itemName.count();

            const names = []

            for ( let i = 0; i < descriptionSort; i++ ) {
                
                const item = this.itemName.nth(i)
                
                const name = await item.textContent();

                names.push(name)
                

            }
            
            return names;
            
}

async getItemDescriptions() {

        const descSorting = await this.itemDescriptions.count();

        const descSummary = []

        for ( let i = 0; i < descSorting; i++ ) {
            
            const descListed = this.itemDescriptions.nth(i);
            
            const itemDescription = await descListed.textContent();
            
            descSummary.push(itemDescription);
        }

        return descSummary;
        
}



async getItemPrices() {

    const priceSort = await this.itemPrices.count();

    const prices = [];

    for ( let i = 0; i < priceSort; i++ ) {

        const priceSummary = await this.itemPrices.nth(i).textContent();

        prices.push(priceSummary);
    }

    return prices

}

async getItemQuantities() {

    const itemQuantity = await this.itemQuantities.count();

    const items = [];

    for ( let i = 0; i < itemQuantity; i++ ) {
        
        const itemSummary = await this.itemQuantities.nth(i).textContent();

        items.push(itemSummary);

    }

    return items
}



async getCartSummary() {
    
    const items = await this.page.locator('.cart_item').evaluateAll(items => 
        items.map(item => ({
                
                quantity: item.querySelector('.cart_quantity')?.textContent.trim(),
                name : item.querySelector('.inventory_item_name')?.textContent.trim(),
                description : item.querySelector('.inventory_item_desc')?.textContent.trim(),
                price : item.querySelector('.inventory_item_price')?.textContent.trim(),

        }))
    )

    return items;

        
}


async continueShopping() {

    await this.continueShop.click();

}

async checkout() {

    await this.cartCheckOut.click();

}

async removeProduct(productName) {
    
    const removeItem = this.page.locator('.inventory_item')
            .filter({
                hasText: productName
            });

        await removeItem
        .getByRole('button')
        .click();
}



async isEmpty() {

    return await this.cartItems.count() === 0;

}



}

module.exports = {
    CartPage
};