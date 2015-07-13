/**
 * 参数
 *
 */
var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path');
//设置静态文件所在的根目录
app.use(express.static(path.join(__dirname,'/')));
app.use('/:id/:name',function(req,res,next){
   res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    next();
});
app.use('/:id/:name',function(req,res,next){
    var result = '';
    result+=(req.query.num+" ");
    result+=(req.params['id']+" ");
    result+=(req.params['name']+" ");
   res.end(result);
});
app.listen(8080);