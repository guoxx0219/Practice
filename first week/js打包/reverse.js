// 将数组顺序反转
function reverse(arr){
	var newarr = [];
	for(var i = arr.length-1; i >= 0; i--){
		// 向newarr数组中添加一系列的值,还可写成
		// newarr[newarr.length] = arr[i];
		push(newarr,arr[i]);
	}
	return newarr;
}
function push(arr,...rest){
	for (var i = 0; i < rest.length; i++) {
		arr[arr.length] = rest[i];
	}
	return arr;
}