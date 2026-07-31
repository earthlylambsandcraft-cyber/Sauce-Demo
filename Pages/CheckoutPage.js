const { expect } = require("@playwright/test");

const { generateRandomName } = require('../Data/randomizer')


class CheckoutPage {
    constructor(page) {

        this.page = page

        this.checkoutTitle = page
            .getByText('Checkout: Your Information');

        this.itemQty = page
            .locator('.shopping_cart_badge');

        this.zipCodeInput = page
            .getByPlaceholder('Zip/Postal Code');

        this.checkoutBtn = page
            .getByRole('button', { name: 'Checkout' });

        this.continueBtn = page
            .getByRole('button', { name: 'Continue' });

        this.cancelBtn = page
            .getByRole('button', { name: 'Cancel' });

        this.firstNameInput = page
            .getByPlaceholder('First Name');

        this.lastNameInput = page
            .getByPlaceholder('Last Name');

    }

async verifyCheckOutPage() {

        await expect(this.checkoutTitle).toBeVisible();

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

async fillFirstName() {

        const randomName =
        new generateRandomName(this.page);

        const firstName = randomName.randomUserFN();
        
        await this.firstNameInput.fill(firstName);

}


async fillLastName() {

        const randomName =
        new generateRandomName(this.page);

        const lastName = randomName.randomUserLN();
        await this.lastNameInput.fill(lastName)
    
}

async fillZipCode() {
    
    await this.zipCodeInput.fill('9500');

}

async fillCustomerInformation() {
    
        const randomName =
        new generateRandomName(this.page);

        const firstName = randomName.randomUserFN();
        const lastName = randomName.randomUserLN();
    
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName)
        
        await this.zipCodeInput.fill('9500');

    }


async checkout() {
    
        await this.checkoutBtn.click();
    
        await expect(this.page).toHaveURL(/checkout-step-one.html/);
        
        
    }
        

async continueCheckout() {
        
        await this.continueBtn.click();

        await expect(this.page).toHaveURL(/checkout-step-two.html/);
    
    }

async cancelCheckout() {
        
        await this.cancelBtn.click();
    
    }



}

module.exports = {
    CheckoutPage
}