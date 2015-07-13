/*express
提供了模板解析，静态文件服务，中间件，路由
还可以很方便的跟第三方插件进行集成
*/
var express = require('express');
var app = express();
app.get('/',function(req,res){
	res.send('hello');
});
app.get('/about',function(req,res){
	res.send('about');
});
app.listen(8080);