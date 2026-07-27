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

    await expect(userNameInput).
        toHaveAttribute("placeholder", 'Username')
    
    await expect(passwordInput).
        toHaveAttribute("placeholder", 'Password')

    await expect(loginBtn)
        .toHaveText('Login')
    
    await expect(loginBtn)
        .toBeEnabled();

    
}
    
async fillUserName(username) {
    

    const usernameInput = this.page.getByPlaceholder("Username");


    await expect(usernameInput).toBeVisible();

    await usernameInput.fill(username);
}

async fillPassword(password) {

    const passwordInput = this.page
        .getByPlaceholder('Password');
    
    await expect(passwordInput).toBeVisible();
    
    await passwordInput.fill(password);
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