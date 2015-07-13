/*nextTick*/

function say(){
	console.log('say');
}

//process.nextTick(say);//下一个执行

setImmediate(say);
console.log("next");

process.nextTick(function(){
	console.log("nectTick延迟1");
});
process.nextTick(function(){
	console.log("nectTick延迟2");
});
process.nextTick(function(){
	console.log("nectTick延迟3");
});
process.on('uncaughtException',function(err){
	console.log(err);
});
