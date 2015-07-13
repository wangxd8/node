/*req http.IncomingMessarge 请求 流对象
res http.ServerResponse 响应 流对象*/

var http = require('http');
var url = require('url')
var server = http.createServer(function(req,res){
	var urlObj = url.parse(req.url,true);
	 console.log(req.headers);
	 console.log(req.url,req.method);
	 console.log(req.headers['host']);
	 res.statusCode = 404;
	 res.setHeader("name","zfpx");
	 res.setHeader("age","6");
	 res.end('hello');
}).listen(8080,function(){
	console.log("启动成功");
});

server.on("connection",function(){
	console.log('connected');
});

server.setTimeout(3000,function(scoket){
	console.log("连接超时了");
	scoket.destroy();
});