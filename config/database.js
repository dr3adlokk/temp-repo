var Sequelize = require("sequelize");

module.exports= new Sequelize("test_db", "root", "root", {
    host: "localhost",
    dialect: "mysql",
    port: 3306
});

// module.exports = sequelize('User', userSchema);
