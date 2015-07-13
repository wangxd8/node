/*TCP 传输控制协议
是一个可靠的，面向连接的，传输协议
数据完整有序从一个计算机到另一台计算机
发送方将字节流分割成合适的报文，将数据交给IP层，接收方可以
TCP对字符编码完全无知
tcp通过流控制的方式，来保证亮点间的数据平衡*/

var http = require('http');
var net = require('net');
var util = require('util');
var fs = require('fs');
http.createServer();
var server = net.createServer(function(socket){
    console.log('客户端已经连接');
    console.log(util.inspect(socket.remoteAddress));
    server.getConnections(function(err,count){
        console.log('现在一共有个%d连接了',count);
    });
    socket.on('data',function(data){
        console.log(data);
        console.log('已接收到的数据量为%d字节',socket.bytesRead);
        socket.write(data+" too");
    });
});
server.listen(8080,function(){
    console.log('服务器已经启动',util.inspect(server.address()));
});