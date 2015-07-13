/*fs文件和目录创建，写入和删除的操作
所有的操作都有同步和异步两种实现 readFile readFileSync
Sync 同步方法，没有sync就是异步方法*/

var fs = require('fs');
//var content = fs.readFileSync('./1.md','utf-8');
//console.log(content);
console.log("2");

fs.readFile('./1.md','utf-8',function(err,data){
	console.log(data);
});
console.log(000);