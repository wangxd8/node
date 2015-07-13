var speakLession = function(cursor){
	return function(teacher){
		console.log("%s 讲 %s",teacher,cursor);
	}
}

var speakNode = speakLession('node');
speakNode("zhangsan");