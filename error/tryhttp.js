var http = require('http');

try{

}catch(ex){
	console.log(ex.message);
}


process.on('uncaughtException',function(err){
	console.log(err);
});