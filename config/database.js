var Sequelize = require("sequelize");
var userSchema= new Sequelize("test_db", "root", "root", {
    host: "localhost",
    dialect: "mysql",
    port: 3306
});

// module.exports = new Sequelize('User', userSchema);
module.exports = userSchema;
