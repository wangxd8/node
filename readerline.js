var fs = require('fs');
var EventEmitter =  require('events').EventEmitter;
var util = require('util');
var Reader = require('./reader.js');
var objReader = new Reader("./msg.txt");

//util.inherits(objReader, EventEmitter);


objReader.emit("newLine","./msg.txt");

objReader.on("newLine",function(data){
	console.log(data);
});