var http = require('http');
var url = require('url');
var DATA={
	"1":"第一篇文章",
	"2":"第2篇文章",
	"3":"第3篇文章",
	"4":"第4篇文章"
}
function getData(id){
	console.log(id);
	return DATA[id];
}
http.createServer(function(req,res){
	var urlObject = url.parse(req.url,true);
	var pathname = urlObject.pathname;
	if(pathname =='favicon.ico'){
		return res.end("404");
	}
	if(pathname=="/"){
		var all = '<ul>';
		for(var attr in DATA){
			 all += '<li><a href="/item?name='+attr+'">文章'+attr+'</a></li>'
		}
		all+='</ul>';
		res.writeHead(200,{"Content-Type":"text/html;charset=utf8"});
		res.end(all);
	}else if(pathname=="/item"){
		res.writeHead(200,{"Content-Type":"text/html;charset=utf8"});
		res.end(getData(urlObject.query.name));
	}
}).listen(8080);