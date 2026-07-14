const { faker } = require('@faker-js/faker');

class generateRandomName {
    

randomUserFN() {

    return faker.person.firstName();
    
    
    
    
    }

randomUserLN() {

    return faker.person.lastName();

    }
}

module.exports = {
    generateRandomName
};