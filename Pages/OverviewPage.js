const { expect } = require("@playwright/test");

class OverviewPage {
    constructor(page) {
        this.page = page
    }

async verifyPage() {

        const overviewTitle = this.page.getByText('Checkout: Overview');

        await expect(overviewTitle).toBeVisible();

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

    const cancel =
    this.page.getByRole('button', {
        name: 'Cancel'
    });

    await cancel.click();

}

async finishOrder() {

        const finishBtn = this.page.getByRole('button', { name: 'Finish' });

        await finishBtn.click();
    
}


async verifyConfirmation() {
    

        const verifiedConfirmation = await this.page.locator(".checkout_complete_container").evaluateAll( confirmations =>
            confirmations.map(confirmation => ({
                
                GreetingMessage : confirmation.querySelector('.complete-header')?.textContent.trim(),
                GreetingContent : confirmation.querySelector('.complete-text')?.textContent.trim(),

            }))
        );

        return verifiedConfirmation;

    
}


}

module.exports = {
    OverviewPage
};