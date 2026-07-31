const { expect } = require("@playwright/test");

class sauceAccount {
    constructor(page) {
        
        this.page = page

    this.userNameInput = page
        .getByPlaceholder('Username')

    this.passwordInput = page
        .getByPlaceholder('Password')

    this.loginButton = page
        .locator('#login-button');

    this.errorMessage = page
        .locator('.error-message-container')

    }

    

    
async verifyLoginPage() {


    await expect(this.userNameInput).toBeVisible();
    await expect(this.passwordInput).toBeVisible();
    await expect(this.loginButton).toBeVisible();

    await expect(this.userNameInput).
        toHaveAttribute("placeholder", 'Username')
    
    await expect(this.passwordInput).
        toHaveAttribute("placeholder", 'Password')

    await expect(this.loginButton)
        .toHaveText('Login')
    
    await expect(this.loginButton)
        .toBeEnabled();

    
}
    
async fillUserName(username) {
    
    await expect(this.userNameInput).toBeVisible();

    await this.userNameInput.fill(username);
}

async fillPassword(password) {
    
    await expect(this.passwordInput).toBeVisible();
    
    await this.passwordInput.fill(password);
}


async clickLogin(){

    
    await this.loginButton.click();

}


async login(username, password) {

    await this.fillUserName(username);
    await this.fillPassword(password);
    await this.clickLogin();
}


async getErrorMessage(expectedMessage) {


    await expect(this.errorMessage)
        .toBeVisible();
    
    
    await expect(this.errorMessage)
        .toHaveText(expectedMessage);
    
}

}

module.exports = {
    
    sauceAccount

}