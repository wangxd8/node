var List = require('./list');

var delegate = function(){
	var _this = this;
	return {
		onInserted:function(){

		},
		onPushed:function(con){
			console.log("dddd");
			console.log(con);
		}
		,onRemoved:function(){

		}
		,onUpdated:function(){

		}
	}
}
var fn = delegate.call(this);
var qqList = new List({
	delegate:fn
});

qqList.push({qq:123456,"nickname":"zhangshan"})