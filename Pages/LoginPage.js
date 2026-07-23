const { expect } = require("@playwright/test");

class sauceAccount {
    constructor(page) {
        this.page = page
    }

    
async verifyPage() {

    const userNameInput = this.page
        .getByPlaceholder('Username')

    const passwordInput = this.page
        .getByPlaceholder('Password')

    const loginBtn = this.page
        .locator('#login-button')

    await expect(userNameInput).toBeVisible();
    await expect(passwordInput).toBeVisible();
    await expect(loginBtn).toBeVisible();

    
}
    
async fillUserName(username) {

    await this.page
        .getByPlaceholder('Username')
        .fill(username);
    
    }

async fillPassword(password) {

    await this.page
        .getByPlaceholder('Password')
        .fill(password);
}


async clickLogin(){

    await this.page
        .locator('#login-button')
        .click();

}


async login(username, password) {

    await this.fillUserName(username);
    await this.fillPassword(password);
    await this.clickLogin();
}


async getErrorMessage() {

    const errorMessage = this.page
    .locator('.error-message-container')

    await expect(errorMessage).toBeVisible();

}

}

module.exports = {
    
    sauceAccount

}