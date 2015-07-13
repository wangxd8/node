var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path');
//设置静态文件所在的根目录
app.use(express.static(path.join(__dirname,'/')));
app.use('/',function(req,res,next){
   res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
   
});
app.listen(8080);