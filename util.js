var util = require("util");
function Parent(){
	this.name = "father";
	this.age = 16;
	this.say = function(){
		console.log("hello"+this.name);
	}
}
Parent.prototype.showName = function(){
	Parent.call(this);
	this.name = "child";

}
util.inherits(Child,Parent);
var p = new Parent();
p.showName();//father
p.say();//hello father
 var c = new Child();
 c.showName();


function Person(){
	this.name = "zfpx";
	this.say = function(){
		console.log("hello"+this.name);
	}
}
var p = new Person();
console.log(p.toString());
console.log(util.inspect(util.inspect(p,false)));
console.log(util.inspect(util.isArray([])));//判断是否一个数组
