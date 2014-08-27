var config = require("./config");
var server = require("./modules/core/server");

server.start(config.server);