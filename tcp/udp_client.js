var dgram = require('dgram');
var util = require('util');
var client = dgram.createSocket('udp4');
var buffer = new Buffer('你好');
/**
 * buffer 发送的数据
 * offset 偏移量
 * length 长度
 * port 服务器端口号
 * address 服务器端地址
 */

client.send(buffer, 0, buffer.length, 41236, '192.168.1.184');

client.bind(41236,'192.168.1.184');

 client.on('message',function(msg,rinfo){
    console.log('客户端接收到 ',msg.toString());
     //server.send(buffer, 0, buffer.length, 41236, '192.168.1.184');
});