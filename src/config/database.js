const { Sequelize } = require("sequelize");
require("dotenv").config();

const config = require("./config"); 
config = config['development'];


const connect = new Sequelize(
    config.database,
    config.username,
    config.password,
    {
        host:  config.host,
        dialect:  config.dialect,
    }
);

module.exports = connect;