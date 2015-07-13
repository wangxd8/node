/*增删改查*/

function List(options){
	this.list = [];
	this.delegate = options.delegate;
}
var prototype = List.prototype;
prototype.push = function(item){
	this.list.push(item);
	this.delegate.onPushed(item);
};
prototype.insert = function(index,afterItem){

	var index = this.indexOf(afterItem);
	if(index>-1){
		this.list.splice(index+1,0,item);
		return true;
	}
	return false;
};
prototype.update=function(index,newItem){
	var item = this.list[index];
	if(item){
		item = newItem;
		return true;
	}
	return false;
};
prototype.indexOf = function(item){
	for(var i = 0;i<this.length();i++){
		if(this.list[i]==item){
			return i;
		}
	}
	return -1;
}
prototype.find = function(item){};
prototype.remove=function(item){
	var index = this.indexOf(item);
	if(index>-1){
		this.list.splice(index,1);
		return true;
	}
	return false;
};
prototype.isEmpty = function(){};

prototype.length = function(){
	return this.list.length;
}

module.exports = List;