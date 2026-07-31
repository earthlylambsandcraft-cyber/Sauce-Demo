const { expect } = require("@playwright/test");

class OverviewPage {
    constructor(page) {
        this.page = page
    
     this.overviewTitle = page
        .getByText('Checkout: Overview');

    this.itemQty = page
        .locator('.shopping_cart_badge');

    this.finishBtn = page
        .getByRole('button', { name: 'Finish' });

    this.cancel =  page
        .getByRole('button', { name: 'Cancel' });
    }

    


async verifyOverviewPage() {

        await expect(this.overviewTitle).toBeVisible();

    }

async getBadgeCount() {
    
    
    const badgeSorting = await this.itemQty.count();

        const badgeQty = [];

        for ( let i = 0; i < badgeSorting; i ++ ) {
            
            const badgeNumber = this.itemQty.nth(i)
            
            const badgeContent = await badgeNumber.textContent();

            badgeQty.push(badgeContent);
            
        }
        
        return badgeQty;
     
    }

async getProducts() {
    
        const productsLabel = await this.page.locator('.cart_item').evaluateAll(items => 
            
            items.map(item => ({
                
                Quantity : item.querySelector('.cart_quantity')?.textContent.trim(),
                Name : item.querySelector('.inventory_item_name')?.textContent.trim(),
                Description : item.querySelector('.inventory_item_desc')?.textContent.trim(),
                Price: item.querySelector('.inventory_item_price')?.textContent.trim(),
        
            }))
        
        );

        return productsLabel;
}

async getPaymentInformation() {

    const sauceCard = await this.page
    .locator('[data-test="payment-info-value"]')
    .textContent()

    return sauceCard;

}

async getShippingInformation() {
    
    const shippingMessage = await this.page
    .locator('[data-test="shipping-info-value"]')
    .textContent();

    return shippingMessage;
    
}

async getSubtotal() {

    const subtotal = await this.page
    .locator('.summary_subtotal_label')
    .textContent();

    return subtotal;
}

async getTax() {

    const tax = await this.page
    .locator('.summary_tax_label')
    .textContent();

    return tax;

}

async getTotal() {

    const total = await this.page
    .locator('.summary_total_label')
    .textContent();

    return total;
}

async cancelOrder() {

    
    await this.cancel.click();

}

async finishOrder() {

        await this.finishBtn.click();
    
}


async getConfirmation() {
    return await this.page.locator(".checkout_complete_container").evaluate(container => ({
        greetingMessage: container.querySelector(".complete-header")?.textContent.trim(),
        greetingContent: container.querySelector(".complete-text")?.textContent.trim()
    }));
}


}

module.exports = {
    OverviewPage
};