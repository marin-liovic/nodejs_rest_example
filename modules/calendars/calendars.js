var config = require("../../config");
var calendarsConfig = require("./config");
var calendarsDAO = require("./calendarsDAO");
var responseHandler = require("../util/responseHandler");

var CALENDARS_URL = config.server.hostName +
					":" +
					config.server.port +
					calendarsConfig.path;

exports.get = function(request, response) {
	calendarsDAO.get(function (rows) {
		if (rows.length===0) {
			responseHandler.noContent(response);
		} else {
			urls = [];
			for(i=0; i<rows.length; i++) {
				urls[i] = CALENDARS_URL + "/" + rows[i].id;
			}
			responseHandler.ok(response, urls);
		}
	});
};

exports.post = function(request, response) {
	var calendarData = request.body;
	calendarsDAO.insert(calendarData, function(id) {
		responseHandler.created(response, CALENDARS_URL+"/"+id);
	});
};

exports.idGet = function(request, response) {
	var id = request.params.id;
	calendarsDAO.getById(id, function(rows) {
		var calendar = rows[0];
		if (calendar) {
			responseHandler.ok(response, calendar);
		} else {
			responseHandler.notFound(response);
		}
	});
};

exports.idPut = function(request, response) {
	var id = request.params.id;
	var calendarData = request.body;
	calendarsDAO.updateById(id, calendarData, function(result) {
		if(result.affectedRows===1) {
			responseHandler.noContent(response);
		} else {
			responseHandler.notFound(response);
		}	
	});
};

exports.idDelete = function(request, response) {
	var id = request.params.id;
	calendarsDAO.deleteById(id, function(result) {
		responseHandler.noContent(response);
	});
};