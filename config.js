var config = {};

config.server = {};
config.server.port = 8080;
config.server.hostName = "localhost";

config.database = {};
config.database.host = "localhost";
config.database.port = 3306;
config.database.user = "admin";
config.database.password = "password";
config.database.schema = "test_api";
config.database.poolSize = 2; //max number of connections in pool

module.exports = config;