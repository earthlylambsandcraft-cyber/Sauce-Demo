const { test, expect } = require('../Fixtures/pageFixtures');




test.use({
    launchOptions: {
        slowMo : 800,
    }
});

test.setTimeout(12000);




test('Valid || should login successfully with valid credentials', async({ login }) => {

    

    await login.login('standard_user', 'secret_sauce');

    
    

});


test('Invalid User || should not login successfully with invalid username', async({ login }) => {

    

    await login.login('standard_users*%@**', 'secret_sauce');

    await login.getErrorMessage();

});

test('Invalid Password || should not login successfully with invalid password', async({ login }) => {

    

    await login.login('standard_users', 'secret_*%@**sauce');

    await login.getErrorMessage();
    

});

test('Empty User || should not login successfully with no username', async({ login }) => {

    

    await login.login('','secret_sauce');

    await login.getErrorMessage();
    

});

test('Empty Password || should not login successfully with no password', async({ login }) => {

    

    await login.login('standard_users','');

    await login.getErrorMessage();
    

});


test('Empty User & Password || should not login successfully with no username & password', async({ login }) => {

    

    await login.login('','');

    await login.getErrorMessage();
    

});



test('Locked User || should not login successfully with locked out credentials', async({ login }) => {

    

    await login.login('locked_out_user', 'secret_sauce');
    

});