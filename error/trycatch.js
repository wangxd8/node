错误处理

var fs = require('fs');

try{
	fs.readFileSync('dd',function(err,data){
		
	});
}catch(ex){
	console.log(ex.message);
}
console.log('over');