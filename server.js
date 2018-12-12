process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var config = require('./config/config'),
	express = require('./config/express'),
	mongoose = require('./config/mongoose');

	/*not my way to connect to online db 

		mongoose = require('./config/mongoose'),
	*/
	

var db = mongoose();
var	app = express();

app.listen(config.port);

module.exports = app;
console.log(process.env.NODE_ENV + ' server running at http://localhost:' + config.port);