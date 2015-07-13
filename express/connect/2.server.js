var http = require('http');
var url = require('url');
var connect = require('./connect')
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
var app = connect();

http.createServer(app).listen(8080);