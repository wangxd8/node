
var express  = require('express');
var app = express();
var fs = require('fs');
//设置静态文件所在的根目录
app.use(express.static(path.join(__dirname,'/')))

app.use('/coffee',function(req,res,next){
	res.coffee +='add coffee';
	next();
});
app.use('/coffee',function(req,res,next){
	res.coffee +='add sugar';
	next();
});
app.use('/coffee',function(req,res,next){
	res.coffee +='add milk';
	next();
});

app.all("/coffee",function(req,res){
	res.end(res.coffee);
});

app.use('/style.css',function(req,res){
	
});
app.listen(8080);