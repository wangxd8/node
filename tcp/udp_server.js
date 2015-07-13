/**
 * TCP；是面向连接的协议
 * UDP 面向非链接的协议，可以直接发送数据
 * 有可能丢包
 *资源 消耗少 处理速度快
 **/
var dgram = require('dgram');
var util = require('util');
var server = dgram.createSocket('udp4');
var buffer = new Buffer('我不好');

server.on('message',function(msg,rinfo){
    console.log('服务器端接收到 ',msg.toString());
    console.log(util.inspect(rinfo));
    setTimeout(function(){
    	server.send(buffer, 0, buffer.length, 41236, '192.168.1.184');
    },5000);
    
});
server.bind(41236,'192.168.1.184');
