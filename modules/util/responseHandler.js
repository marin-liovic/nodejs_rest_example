exports.internalServerError = function(response) {
	response.statusCode=500;
	response.end();
};

exports.notFound = function(response) {
	response.statusCode=404;
	response.end();	
};

exports.noContent = function(response){
	response.statusCode=204;
	response.send();
};

exports.created = function(response, location) {
	response.writeHead(201, {Location: location});
	response.end();
};

exports.ok = function(response, data) {
	response.send(data);
};