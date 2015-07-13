/*cookie 是web服务器发送用户的一段文本
浏览器收到cookie后，会把cookie信息以key-value的形式保存在浏览器端
再次请求的时候，浏览器会把之前保存的cookie重新发给服务器端*/

var url = require('url');
var http = require('http');

http.createServer(function(req,res){
	var urlObj = url.parse(req.url,true);
	var pathname = urlObj.pathname;
	if(pathname=='/favicon.ico'){
		res.writeHead(404);
		res.end(http.STATUS_CODES[404]);
	}else if(pathname=='/write'){
		res.writeHead(200,{"Content-Type":"text/html;charset=utf8","Set-Cookie":"name=zfpx"});
		res.end('成功写入cookie');
	}else if(pathname=='/read'){
		res.end(req.headers.cookie);//读取cookie
	}else{
		res.end(req.headers.cookie);
	}
}).listen(8080);