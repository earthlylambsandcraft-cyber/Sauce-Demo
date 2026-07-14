const users = {

    standardUser: {

        username: "standard_user",

        password: "secret_sauce"
    },

    invalidUser: {

    username: "wrong_user",

    password: "secret_sauce"

    },

    invalidPassword: {

        username: "standard_user",

        password: "wrong_password"

    },

    empty: {

        username: "",

        password: ""

    },

    lockedUser: {

        username: "locked_out_user",

        password: "secret_sauce"
    },

    

};


module.exports = {

    users

};