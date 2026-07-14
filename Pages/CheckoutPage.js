const { expect } = require("@playwright/test");

const { generateRandomName } = require('../Data/randomizer')


class CheckoutPage {
    constructor(page) {
        this.page = page
    }

async verifyCheckOutPage() {
        
        const checkoutTitle = await this.page
        .getByText('Checkout: Your Information');

        await expect(checkoutTitle).toBeVisible();

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

async fillFirstName() {

        const randomName =
        new generateRandomName(this.page);

        const firstName = randomName.randomUserFN();
        await this.page.getByPlaceholder('First Name').fill(firstName);

}


async fillLastName() {

        const randomName =
        new generateRandomName(this.page);

        const lastName = randomName.randomUserLN();
        await this.page.getByPlaceholder('Last Name').fill(lastName);
    
}

async fillZipCode() {
    
    const zipCodeInput = this.page.getByPlaceholder('Zip/Postal Code');
    await zipCodeInput.fill('9500');

}

async fillCustomerInformation() {
    
        const randomName =
        new generateRandomName(this.page);

        const firstName = randomName.randomUserFN();
        const lastName = randomName.randomUserLN();
    
        await this.page.getByPlaceholder('First Name').fill(firstName);
        await this.page.getByPlaceholder('Last Name').fill(lastName);
    
    
        const zipCodeInput = this.page.getByPlaceholder('Zip/Postal Code');
        await zipCodeInput.fill('9500');

    }


async checkout() {
    
        const checkoutBtn = this.page.getByRole('button', { name: 'Checkout' });
    
        await checkoutBtn.click();
    
        await expect(this.page).toHaveURL(/checkout-step-one.html/);
        
        
    }
        

async continueCheckout() {
        
        const continueBtn = this.page.getByRole('button', { name: 'Continue' });
        await continueBtn.click();


        await expect(this.page).toHaveURL(/checkout-step-two.html/);
    
    }

async cancelCheckout() {
        
        const cancelBtn = this.page.getByRole('button', { name: 'Cancel' });
        await cancelBtn.click();
    
    }



}

module.exports = {
    CheckoutPage
}