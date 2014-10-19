var express = require('express')
var serveStatic = require('serve-static')

var app = express()


var request = require('request');

var config = require('./config');
app.use(serveStatic('www', {
	'index': ['index.html']
}))


var exec = require('child_process').exec;

var fs = require("fs");

app.get("/android/:name", function(req, res) {
	var userName = req.params.name || "rihanna";

	request.get("https://api.instagram.com/v1/users/search?q=" + userName + "&client_id=" + config.client_id, function(err, response, body) {
	
		var body = JSON.parse(body);
		var user = body.data[0];

		exec("userId="+user.id+" picurl=" + user.profile_picture + " ./createForUserId.sh", function(err, stdout) {
			stream = fs.createReadStream("./platforms/android/ant-build/CordovaApp-debug.apk");
			res.header("content-disposition", "attachment; filename='" + userName +".apk'");
			stream.pipe(res);
		})
	});
});


app.listen(config.port);