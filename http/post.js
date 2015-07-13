
var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(function(req,res){
	var pathname = url.parse(req.url).pathname;
	if(pathname=="/"){
		fs.createReadStream("./post.html").pipe(res);
	}else if(pathname=='post'){

	}
});