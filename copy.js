
var fs = require('fs');
var BUFFER_SIZE = 3;
/*fs.writeSync(fd, buffer, offset, length, position);
fd 文件描述符，要写入的文件
buffer 从个缓存区开始读*/

function copy(src,desc){
	//读到的位置，来源fd,目标fd 实际读到的字节数
	var readSoFar,fdSrc,fddest,read;
	var buffer = new Buffer(BUFFER_SIZE);
	fdSrc = fs.openSync(src, 'r');
	fddest = fs.openSync(desc, "w");
	readSoFar = 0 ;
	do{
		read = fs.readSync(fdSrc , buffer, 0, BUFFER_SIZE, read);
		fs.writeSync(fddest,buff,0,read);
		readSoFar+=read;
	}while(read)
	fs.closest(fdSrc);
	fs.closest(fddest);
} 
copy("src.txt","dest.txt")