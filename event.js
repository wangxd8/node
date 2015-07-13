/*prototype
通过原型和构造函数生成对象，与直接定义有不同
1.构造函数内定义的属性继承方式与原型对象
2.构造

原形链
Object Function 都是构造函数，用于生产对象
所有的构造函数

*/

function Emitter(){

}

Emitter.prototpye.addListener = function addListener(tyep,listener){
	if(typeof listener!='function'){
		throw TypeError("listener must be a function");
	}
	//如果此属性不存在，则进行初始化
	if(!this._events){
		this._events = {};
	}

	if(!this._events[type]){
		this._events[type].push(listener);
	}else{
		this._events[type] = [listener];	
	}

}

Emitter.portotype.emit = function emit(type){
	if(!this._events){
		this._events = {};
	}
	var listeners = this._events[type];
	listeners.forEach(function(listener){
		listener.apply(this);
	});
}

function Gril(){}

Gril.prototpye = new Emitter();

var gril = new Gril();

gril.on()