var fs = require('fs');
fs.readFile('1.md','utf8',function(err,data){
	console.log(data);
});
fs.writeFile('1.md','wangxudong',function(err,data){
	console.log("d");
});