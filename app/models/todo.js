var Sequelize = require('mysql2');

module.exports = new Sequelize.model('Todo', {
    text:  {required: true, type: String},
    status: Boolean,
    email : String
});