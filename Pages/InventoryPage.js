const { expect } = require("@playwright/test");

class InventoryPage {
    constructor(page) {
        this.page = page
    }



async verifyInventoryPage() {
    
        await expect(this.page).toHaveURL(/inventory.html/);

        const inventoryTitle = this.page.getByText('Products');
    
        await expect(inventoryTitle).toBeVisible();
    
    }    

async openCart() {

    const goToCart =  this.page.locator('.shopping_cart_link')

    await goToCart.click();


}

async sortBy(options) {

    await this.page
    .locator('.product_sort_container')
    .selectOption({ label : options });


}

async addProduct(productName) {

        const itemInStore = this.page.locator('.inventory_item')
            .filter({
                hasText: productName
            });

        await expect(itemInStore).toHaveCount(1);

        await itemInStore
        .getByRole('button')
        .click();

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


async getProductCount() {

    return await this.page
    .locator('.inventory_item')
    .count();
    
}


async getProductNames() {
        
        const names = [];

        const itemShelved = this.page.locator('.inventory_item_name');

        const itemslooped = await itemShelved.count();

        for ( let i = 0; i < itemslooped; i++ ) {

            const item = itemShelved.nth(i);

            const name =  await item.textContent();

            names.push(name);    
        }

        return names;
    }

async getProductDescriptions() {

        const descriptions = [];

        const itemShelved = this.page.locator('.inventory_item_desc');

        const itemslooped = await itemShelved.count();

        for ( let i = 0; i < itemslooped; i++ ) {

            const item = itemShelved.nth(i);

            const description =  await item.textContent();

            descriptions.push(description);
            
        }

        return descriptions;

}

async getProductPrices() {

    const prices = [];

        const itemShelved = this.page.locator('.inventory_item_price');

        const itemslooped = await itemShelved.count();

        for ( let i = 0; i < itemslooped; i++ ) {

            const item = itemShelved.nth(i);

            const price =  await item.textContent();

            prices.push(price);
            
        }

        return prices;

}

async getProductSummary() {

    const productList = await this.page.locator('.inventory_item').evaluateAll(items =>
        items.map(item => ({

            name : item.querySelector('.inventory_item_name')?.textContent.trim(),
            description : item.querySelector('.inventory_item_desc')?.textContent.trim(),
            price : item.querySelector('.inventory_item_price')?.textContent.trim(),


        }))
    )

    return productList;


}


}





module.exports = {
    InventoryPage
};