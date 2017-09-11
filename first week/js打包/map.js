//映射：map arr为数组，fn为实现对每个数组元素功能的参数
function map(arr,fn){
	var newarr = [];
	for (var i = 0; i < arr.length; i++) {
		newarr[newarr.length] = fn(arr[i]);
	}
	return newarr;
}