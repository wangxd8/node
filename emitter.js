

var EventEmitter = require('events').EventEmitter;

var util = require("util");

function School(){

}
util.inherits(School,EventEmitter);

var stu = new School();

stu.addListener("goClass",function(data){
	console.log("谁到学校上课了？"+data);
});

stu.once("oneClass",function(data){
	console.log("谁来了一次"+data);

});
stu.emit("goClass","xiaoming");
stu.emit("oneClass","zhangsan");

stu.removeListener('oneClass',function(){});
stu.emit("oneClass","xiaohong");

//删除所有的事件
stu.removeAllListeners();
stu.emit("goClass","xiaoqing");