// note original setup was for mongoDB and had easier syntax and better funcionality... if we end up deciding to add mongo db just uncomment out everything below *!@*  not this one... the next time you see that.
var Sequelize = require('sequelize');
var bcrypt = require('bcryptjs');
const config = require('../config/database');


var userSchema = sequelize.define('user'{
    local: {
        email: Sequelize.STRING,
        password: Sequelize.STRING,
    },
    facebook: {
        id: Sequelize.STRING, 
        token: Sequelize.STRING, 
        email: Sequelize.STRING,
        name: Sequelize.STRING
    },
    google: {
        id: Sequelize.STRING,
        token: Sequelize.STRING,
        email: Sequelize.STRING,
        name: Sequelize.STRING
    }
});

// force: true will drop the table if it already exists
User.sync({
    force: true
}).then(() => {
    // Table created
    return User.create({
        firstName: 'John',
        lastName: 'Hancock'
    });
});

// methods
// generating a hash
userSchema.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// // checking if password is valid
userSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.local.password);
};

// // create the model for users and expose it to our app
module.exports =new  Sequelize('User', userSchema);
// module.exports = user














// *!@*
// var mongoose = require('mongoose');
// var bcrypt = require('bcryptjs');
// const config = require('../config/database');


// var userSchema = new Sequelize({
//     local: {
//         email: String,
//         password: String
//     },
//     facebook: {
//         id: String,
//         token: String,
//         email: String,
//         name: String
//     },
//     google: {
//         id: String,
//         token: String,
//         email: String,
//         name: String
//     }
// });

// // methods
// // generating a hash
// userSchema.methods.generateHash = function (password) {
//     return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
// };

// // checking if password is valid
// userSchema.methods.validPassword = function (password) {
//     return bcrypt.compareSync(password, this.local.password);
// };

// // create the model for users and expose it to our app
// module.exports =new  Sequelize('User', userSchema);