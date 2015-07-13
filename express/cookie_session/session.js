var http = require('http');
var url = require('url');
var cookieUtils = require('./cookieUtils');
var SESSION_KEY = 'zfkey';
var EXPIRE = 3600;
http.createServer(function(req,res){
	var urlObj = url.parse(req.url,true);
	var pathname = urlObj.pathname;
	if(pathname=='favicon.ico'){
		res.end('404');
	}else{
		cookieUtils.parse(req.headers.cookieUtils);	
		if(cookieObj[SESSION_KEY]){
			
		}
	}
});