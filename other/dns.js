var dns = require('dns');
dns.resolve('www.baidu.com','A',function(err,address){
	console.log(address);
});

dns.lookup('www.tita.com',4,function(err,address){
	console.log(address);
});
dns.reverse("221.238.18.116",function(err,domains){
	console.log(domains);
});