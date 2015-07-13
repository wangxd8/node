
function connect(){
	app.stack = [];
	return app;
}
function app(req,res,next){
	app.handle(req,res,next);
}
//路径
//fn 函数
app.use=function(route,fn){
	if('string' != typeof route){
		fn = route;
		route = '/';
	}
	this.stack.push(fn);
}	
app.handle =function(req,res,next){
	var index= 0 ;
	var stack = this.stack;
	function next(){
		var layer = stack[index++];
		
	}
}
module.exports = connect;