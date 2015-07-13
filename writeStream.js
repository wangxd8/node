/*通过流向文件里写入数据*/

var fs = require('fs');
var ws = fs.createWriteStream('target');
/*ws.write("hello");*/


var rs = fs.createReadStream('./msg.txt');//读取文件

rs.on('open',function(){
	console.log('文件打开了');
});
rs.on('data',function(data){
	console.log("读到了数据",data.toString());
	ws.write(data.toString());
	
});
rs.on('end',function(){
	ws.end('over');
})


