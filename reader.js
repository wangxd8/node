var fs = require('fs');
var EventEmitter =  require('events').EventEmitter;
var util = require('util');
//var os = require('os');
//var RETURN_FLAG = os.EOL;
var RETURN = 0x0d;//ascii \r 
var NEWLINE = 0x0a;//ascii \r 



function LineReader(path){
	this._rs = fs.createReadStream(path, 'r');
}
util.inherits(LineReader, EventEmitter);
LineReader.prototype.on('newListener',function(eventName,data){
	console.log()
	if(eventName == 'newLine'){
		var line=[];
		var self = this;
		this._rs.on("readable",function(){
			var ch;
			while(null!=(ch = this.read(1))){
				if(ch[0]==RETURN){
					this.read(1);
					self.emit('newLine',Buffer.concat(line).toString());
					line=[];
				}else{
					line.push(ch);
				}
			}
		});
		this._rs.on('end',function(){
			self.emit('newLine',Buffer.concat(line).toString());
			self.emit('end');
		});
	}
});

module.exports = LineReader;