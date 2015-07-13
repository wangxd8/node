/*在操作系统中，每个应用程序都是一个进程类的对象
process 
可以在任何模块中访问*/

/* mainModule:
  { id: '.',//模块ID，.代表当前文件m，或者文件绝对路径
    exports: {},//导出对象
    parent: null,//父模块
    filename: 'G:\\node\\0628\
    loaded: false,//是否加载成功
    children: [],//子模块
    paths://路径
     [ 'G:\\node\\0628\\intro\
       'G:\\node\\0628\\node_m
       'G:\\node\\node_modules
       'G:\\node_modules' ] }*/

console.log(process);

//stdin //标准输入

process.stdin.on("data",function(chunk){
	process.stdout.write(chunk);
});

process.argv.forEach(function(val){
	console.log(val);
});

//监听关闭线程事件
process.on('SIGTERM',function(){
  process.exit();
})