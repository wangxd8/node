/*流是有序的，有起点和终点的，字节传输手段*/
var fs = require('fs');
var rs = fs.createReadStream('./msg.txt');

rs.on('open',function(){
	console.log('文件打开了');
});
rs.on('data',function(data){
	console.log("读到了数据",data.toString());
});

rs.on('data',function(){
	console.log("文件关闭");
});
rs.on('readable',function(){
	console.log('readable');
	console.log(rs.read(64*1024).length);
});