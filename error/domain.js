/*domain帮我们正确优雅的处理异常*/

var domain = require('domain');
var http = require('http');

http.createServer(function(req,res){
	var monitor = domain.create();
	monitor.once('error',function(err){
		res.end(err.message);
	});
	monitor.run(function(){
		error();
	});
}).listen("8080");