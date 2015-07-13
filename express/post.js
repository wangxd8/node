var express = require('express');
var app = express();
var fs = require('fs');

var session - require('express-session');

//监听 路径 

var bodyParser = require('body-parser');

app.use(session({
	
}));

//上传文件
var multer = require('multer');
app.use(bodyParser.urlencoded({extends:true}));

app.get('/',function(req,res){
	fs.createReadStream('./form.html').pipe(res);
});

app.listen(8080);