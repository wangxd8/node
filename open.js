
/*打开文件*/
/*

fd 是一个打开文件索引，是累加的
0 标准输入
1 标准输出
2 错误输出
*/
var fs  = require('fs');
fs.open("./msg.txt", 'r',function(err,fd){
	console.log(err,fd);
	fs.close(fd);
});

/*如何分多次读取文件*/
/*fs.read();
fd 文件索引
buffer 把文件内容读到哪个buffer里
offset buffer偏移量，从哪个字节开始写起
length 从文件中读取的字节数
position 文件中读取的开始位置
*/
fs.open('./msg.txt','r',function(err,fd){
    var buff = new Buffer(12);
    fs.read(fd,buff,0,6,0,function(err,bytesRead){
        console.log(bytesRead,buff.slice(0,bytesRead).toString());
        fs.read(fd,buff,6,6,6,function(err,bytesRead){
            console.log(bytesRead,buff.slice(6,12).toString());
        });
    });
});

var content = fs.openSync('./msg.txt','r');
var buffer = new Buffer(12);
//fs.readSync(fd, buffer, offset, length, position);
console.log("dd");
var firstContent = fs.readSync(content,buffer,0,6,0);
console.log(firstContent);
console.log(buffer.slice(0,firstContent).toString());
fs.readSync(content,buffer,6,6,6);
console.log(buffer.slice(6,12).toString());