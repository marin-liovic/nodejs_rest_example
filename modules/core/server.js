var express = require("express");
var calendars = require("../calendars/calendars");
var calendarsConfig = require("../calendars/config");

function start(serverConfig) {
	var application = express();
	
	application.configure(function() {
		application.use(express.bodyParser());
	});
	
	application.get(calendarsConfig.path, calendars.get);
	application.post(calendarsConfig.path, calendars.post);
	application.get(calendarsConfig.path+"/:id", calendars.idGet);
	application.put(calendarsConfig.path+"/:id", calendars.idPut);
	application.delete(calendarsConfig.path+"/:id", calendars.idDelete);
	
	application.listen(serverConfig.port);
	console.log("Server started on port: "+serverConfig.port);
}

exports.start = start;