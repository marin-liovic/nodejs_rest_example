var dbpool = require("../core/dbpool");
var uuid = require('node-uuid');

var GET_ALL = "SELECT id FROM calendars";
exports.get = function(callback) {
	dbpool.query(GET_ALL, function(err, rows) {
		if (err) {
			throw err;
		} else {
			callback(rows);
		}		
	});
};

var GET_BY_ID = "SELECT * FROM calendars WHERE id=?";
exports.getById = function(id, callback) {
	dbpool.query(GET_BY_ID, [id], function(err, rows) {
		if (err) {
			throw err;
		} else {
			callback(rows);
		}				
	});		
};

var INSERT = "INSERT INTO calendars (id,subject,description) VALUES(?,?,?)";
exports.insert = function(calendarData, callback) {
	calendarData.id = uuid.v4();
	dbpool.query(INSERT, [calendarData.id, calendarData.subject, 
				calendarData.description], function(err) {
		if (err) {
			throw err;
		} else {
			callback(calendarData.id);			
		}		
	});
};

var UPDATE_BY_ID = "UPDATE calendars SET subject=?, description=? WHERE id=?";
exports.updateById = function(id, calendarData, callback) {
	dbpool.query(UPDATE_BY_ID, [calendarData.subject, 
	calendarData.description, id], function(err, result) {
		if (err) {
			throw err;
		} else {
			callback(result);			
		}		
	});
};

var DELETE_BY_ID = "DELETE FROM calendars WHERE id=?";
exports.deleteById = function(id, callback) {
	dbpool.query(DELETE_BY_ID, [id], function(err) {
		if (err) {
			throw err;
		} else {
			callback();
		}		
	});
};