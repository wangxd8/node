
var express = require('express');
var path  = require('path');
var app = express();
app.set('view engine','ejs');

//设置模板存放目录
app.set('views',path.join(__dirname,'/'));
app.get('/',function(req,res){
	res.render('index');
});
app.listen(8080);

