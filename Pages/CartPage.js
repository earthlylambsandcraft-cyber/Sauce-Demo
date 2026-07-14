const { expect } = require("@playwright/test");


class CartPage {
    constructor(page){
        this.page = page
    }



async open() {
    
    const cartRedirection = this.page.locator('.shopping_cart_link');
    
    await cartRedirection.click();

}

async verifyCartPage() {
    
        await expect(this.page).toHaveURL(/cart.html/);
    
        const cartTitle = this.page.getByText('Your Cart');

        const cartQty = this.page.getByText('QTY');

        const cartDesc = this.page.getByText('Description');
    
        await expect(cartTitle).toBeVisible();

        await expect(cartQty).toBeVisible();

        await expect(cartDesc).toBeVisible();
    
        await expect(cartTitle).toHaveText('Your Cart');

        await expect(cartQty).toHaveText('QTY');

        await expect(cartDesc).toHaveText('Description');

    
    }

async getBadgeCount() {
    
    const itemQty = this.page.locator('.shopping_cart_badge');
    
    const badgeSorting = await itemQty.count();

        const badgeQty = [];

        for ( let i = 0; i < badgeSorting; i ++ ) {
            
            const badgeNumber = itemQty.nth(i)
            
            const badgeContent = await badgeNumber.textContent();

            badgeQty.push(badgeContent);
            
        }
        
        return badgeQty;
     
    }


async getItems() {

        const itemDescription = this.page.locator('.inventory_item_name');

            const descriptionSort = await itemDescription.count();

            const names = []

            for ( let i = 0; i < descriptionSort; i++ ) {
                
                const item = itemDescription.nth(i)
                
                const name = await item.textContent();

                names.push(name)
                

            }
            
            return names;
            
}

async getDescriptions() {

        const descriptions = this.page.locator('.inventory_item_desc');

        const descSorting = await descriptions.count();

        const descSummary = []

        for ( let i = 0; i < descSorting; i++ ) {
            
            const descListed = descriptions.nth(i);
            
            const description = await descListed.textContent();
            
            descSummary.push(description);
        }

        return descSummary;
        
}



async getPrices() {

    const itemPrice = this.page.locator('.inventory_item_price');

    const priceSort = await itemPrice.count();

    const prices = [];

    for ( let i = 0; i < priceSort; i++ ) {

        const priceSummary = await itemPrice.nth(i).textContent();

        prices.push(priceSummary);
    }

    return prices

}

async getQuantities() {

    const itemQty = this.page.locator('.cart_quantity');

    const itemQtySort = await itemQty.count();

    const quantities = [];

    for ( let i = 0; i < itemQtySort; i++ ) {

        const QtySummary = await itemQty.nth(i).textContent();

        quantities.push(QtySummary);
    }

    return quantities
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

    const continueShop = this.page.getByRole('button', { name : 'Continue Shopping' });

    await continueShop.click();

}

async checkout() {

    const cartCheckOut = this.page.getByRole('button', { name : 'Checkout' });

    await cartCheckOut.click();

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

    const itemCount = await this.page
        .locator('.cart_item')
        .count();

    return itemCount === 0;

}



}

module.exports = {
    CartPage
};