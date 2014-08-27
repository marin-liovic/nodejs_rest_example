var config = require("../../config");
var mysql = require("mysql");

var pool =  mysql.createPool({
	host: config.database.host,
	port: config.database.port,
	user: config.database.user,
	password: config.database.password,
	database: config.database.schema,
	connectionLimit: config.database.poolSize
});

function query(sql, params, callback) {
	pool.query(sql, params, callback);
}
	
exports.query = query;