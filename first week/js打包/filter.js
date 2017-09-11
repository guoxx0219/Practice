// 映射，arr为数组，fn为实现筛选某些特定元素的参数
function filter(arr,fn){
	var newarr = [];
	for (var i = 0; i < arr.length; i++) {
		if(fn(arr[i])){
			newarr[newarr.length] = arr[i];
		}
	}
	return newarr;
}