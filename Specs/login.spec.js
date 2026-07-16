const { test, expect } = require('../Fixtures/pageFixtures');
const { users } = require('../Data/users') 



test('@smoke @regression @login Valid - should login successfully with valid credentials', async({ login }) => {

    

    await login.login(
        users.standardUser.username,
        users.standardUser.password
    );

    
    

});


test('@regression @login Invalid User - should not login successfully with invalid username', async({ login }) => {

    

    await login.login(
        users.invalidUser.username,
        users.invalidUser.password
    );

    await login.getErrorMessage();

});

test('@regression @login Invalid Password - should not login successfully with invalid password', async({ login }) => {

    

    await login.login(
        users.invalidPassword.username,
        users.invalidPassword.password
    );

    await login.getErrorMessage();
    

});

test('@regression @login Invalid username & Password - should not login successfully with invalid username & password', async({ login }) => {

    await login.login(
        users.invalidUser.username,
        users.invalidPassword.password
    );

    await login.getErrorMessage();

});

test('@regression @login Empty User - should not login successfully with no username', async({ login }) => {

    

    await login.login(
        
        users.empty.username,
        users.standardUser.password
    );

    await login.getErrorMessage();
    

});

test('@regression @login Empty Password - should not login successfully with no password', async({ login }) => {

    

    await login.login(
        
        users.standardUser.username,
        users.empty.password
    );

    await login.getErrorMessage();
    

});


test('@regression @login Empty User & Password - should not login successfully with no username & password', async({ login }) => {

    

    await login.login(
        
        users.empty.username,
        users.empty.password
    );

    await login.getErrorMessage();
    

});



test('@regression @login Locked User - should not login successfully with locked out credentials', async({ login }) => {

    

    await login.login(
        
        users.lockedUser.username,
        users.lockedUser.password
    );
    

});